import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipz")
export default class IpzController {
  @operation({
    summary: "Get Ipz",
  })
  @get()
  static getIpz = procedure({
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
