import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipq")
export default class IpqController {
  @operation({
    summary: "Get Ipq",
  })
  @get()
  static getIpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipq",
  })
  @post("{id}")
  static createIpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
