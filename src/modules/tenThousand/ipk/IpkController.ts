import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipks")
export default class IpkController {
  @operation({
    summary: "Get Ipks",
  })
  @get()
  static getIpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipk",
  })
  @post("{id}")
  static createIpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
