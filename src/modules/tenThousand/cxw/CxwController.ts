import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxw")
export default class CxwController {
  @operation({
    summary: "Get Cxw",
  })
  @get()
  static getCxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxw",
  })
  @post("{id}")
  static createCxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
