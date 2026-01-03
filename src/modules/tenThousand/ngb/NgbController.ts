import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngbs")
export default class NgbController {
  @operation({
    summary: "Get Ngbs",
  })
  @get()
  static getNgbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngb",
  })
  @post("{id}")
  static createNgb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
