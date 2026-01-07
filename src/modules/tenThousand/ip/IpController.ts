import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ip")
export default class IpController {
  @operation({
    summary: "Get Ip",
  })
  @get()
  static getIp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ip",
  })
  @post("{id}")
  static createIp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
