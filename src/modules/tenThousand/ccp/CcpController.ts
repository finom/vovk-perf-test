import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccps")
export default class CcpController {
  @operation({
    summary: "Get Ccps",
  })
  @get()
  static getCcps = procedure({
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
