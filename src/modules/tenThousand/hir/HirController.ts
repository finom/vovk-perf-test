import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hir")
export default class HirController {
  @operation({
    summary: "Get Hir",
  })
  @get()
  static getHir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hir",
  })
  @post("{id}")
  static createHir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
