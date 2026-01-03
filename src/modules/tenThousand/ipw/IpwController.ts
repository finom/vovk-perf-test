import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipws")
export default class IpwController {
  @operation({
    summary: "Get Ipws",
  })
  @get()
  static getIpws = procedure({
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
