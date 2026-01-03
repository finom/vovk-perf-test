import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcps")
export default class BcpController {
  @operation({
    summary: "Get Bcps",
  })
  @get()
  static getBcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcp",
  })
  @post("{id}")
  static createBcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
