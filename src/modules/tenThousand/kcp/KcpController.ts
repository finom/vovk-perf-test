import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcps")
export default class KcpController {
  @operation({
    summary: "Get Kcps",
  })
  @get()
  static getKcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcp",
  })
  @post("{id}")
  static createKcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
