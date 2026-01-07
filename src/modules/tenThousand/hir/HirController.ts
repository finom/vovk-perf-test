import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hir")
export default class HirController {
  @operation({
    summary: "Get Hir",
  })
  @get()
  static getHir = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hir",
  })
  @post("{id}")
  static createHir = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
