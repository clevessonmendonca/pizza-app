import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

export const Pagination = ({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) => {
  const pages = Math.ceil(pageIndex / perPage) || 1;
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {" "}
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div>
          Página {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="w-4 h-4" />
            <div className="sr-only">Primeira página</div>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft className="w-4 h-4" />
            <div className="sr-only">Próxima página</div>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight className="w-4 h-4" />
            <div className="sr-only">Página anterior</div>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="w-4 h-4" />
            <div className="sr-only">Última página</div>
          </Button>
        </div>
      </div>
    </div>
  );
};
