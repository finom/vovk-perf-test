import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxws")
export default class CxwController {
  @operation({
    summary: "Get Cxws",
  })
  @get()
  static getCxws = procedure({
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
