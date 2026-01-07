import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmw")
export default class CmwController {
  @operation({
    summary: "Get Cmw",
  })
  @get()
  static getCmw = procedure({
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
