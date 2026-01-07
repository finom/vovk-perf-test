import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccp")
export default class CcpController {
  @operation({
    summary: "Get Ccp",
  })
  @get()
  static getCcp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccp",
  })
  @post("{id}")
  static createCcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
