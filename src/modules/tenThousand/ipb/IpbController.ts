import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipbs")
export default class IpbController {
  @operation({
    summary: "Get Ipbs",
  })
  @get()
  static getIpbs = procedure({
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
