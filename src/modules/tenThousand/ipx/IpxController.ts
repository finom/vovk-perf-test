import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipx")
export default class IpxController {
  @operation({
    summary: "Get Ipx",
  })
  @get()
  static getIpx = procedure({
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
