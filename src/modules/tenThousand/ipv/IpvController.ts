import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipv")
export default class IpvController {
  @operation({
    summary: "Get Ipv",
  })
  @get()
  static getIpv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipv",
  })
  @post("{id}")
  static createIpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
