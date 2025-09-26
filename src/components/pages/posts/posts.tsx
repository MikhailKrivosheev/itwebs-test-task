import Pagination from '@/components/shared/pagination';
import Section from '@/components/shared/section';
import { ROUTE } from '@/constants/route';
import { PostsResponse } from '@/types/post';
import List from './list';

export default function Posts({ data }: { data: PostsResponse }) {
  return (
    <>
      <Section title="Посты" tag="h1" className="items-center">
        <p className="text-center text-28">
          На этой странице представлены демонстрационные посты, полученные с публичного сервиса
          JSONPlaceholder. Это тестовые данные, используемые только для примера отображения контента
          и проверки работы интерфейса. Сами записи не несут смысловой нагрузки и служат в качестве
          заглушек при разработке.
        </p>
        <div className="mt-4">
          <h2>
            Страница {data.currentPage} из {data.totalPages} • Всего постов: {data.total}
          </h2>
        </div>
      </Section>
      <Section>
        <List posts={data.posts} />

        {data.totalPages > 1 && (
          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
            basePath={ROUTE.posts}
            className="mt-12"
          />
        )}
      </Section>
    </>
  );
}
