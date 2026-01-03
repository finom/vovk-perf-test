import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmws")
export default class CmwController {
  @operation({
    summary: "Get Cmws",
  })
  @get()
  static getCmws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmw",
  })
  @post("{id}")
  static createCmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
