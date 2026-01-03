import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxbs")
export default class CxbController {
  @operation({
    summary: "Get Cxbs",
  })
  @get()
  static getCxbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxb",
  })
  @post("{id}")
  static createCxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
