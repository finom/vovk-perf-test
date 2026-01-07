import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipb")
export default class IpbController {
  @operation({
    summary: "Get Ipb",
  })
  @get()
  static getIpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipb",
  })
  @post("{id}")
  static createIpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
