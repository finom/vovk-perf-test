import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dns")
export default class DnsController {
  @operation({
    summary: "Get Dns",
  })
  @get()
  static getDns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dns",
  })
  @post("{id}")
  static createDns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
