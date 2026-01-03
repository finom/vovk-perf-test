import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipzs")
export default class IpzController {
  @operation({
    summary: "Get Ipzs",
  })
  @get()
  static getIpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipz",
  })
  @post("{id}")
  static createIpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
