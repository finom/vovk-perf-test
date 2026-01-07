import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfw")
export default class CfwController {
  @operation({
    summary: "Get Cfw",
  })
  @get()
  static getCfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfw",
  })
  @post("{id}")
  static createCfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
