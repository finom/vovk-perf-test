import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilbs")
export default class IlbController {
  @operation({
    summary: "Get Ilbs",
  })
  @get()
  static getIlbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilb",
  })
  @post("{id}")
  static createIlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
