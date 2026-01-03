import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipgs")
export default class IpgController {
  @operation({
    summary: "Get Ipgs",
  })
  @get()
  static getIpgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipg",
  })
  @post("{id}")
  static createIpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
