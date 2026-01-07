import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipg")
export default class IpgController {
  @operation({
    summary: "Get Ipg",
  })
  @get()
  static getIpg = procedure({
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
