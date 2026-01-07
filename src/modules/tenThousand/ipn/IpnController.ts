import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipn")
export default class IpnController {
  @operation({
    summary: "Get Ipn",
  })
  @get()
  static getIpn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipn",
  })
  @post("{id}")
  static createIpn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
