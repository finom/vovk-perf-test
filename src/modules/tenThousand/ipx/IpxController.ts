import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipxes")
export default class IpxController {
  @operation({
    summary: "Get Ipxes",
  })
  @get()
  static getIpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipx",
  })
  @post("{id}")
  static createIpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
