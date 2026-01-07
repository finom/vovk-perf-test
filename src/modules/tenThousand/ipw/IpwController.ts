import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipw")
export default class IpwController {
  @operation({
    summary: "Get Ipw",
  })
  @get()
  static getIpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipw",
  })
  @post("{id}")
  static createIpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
