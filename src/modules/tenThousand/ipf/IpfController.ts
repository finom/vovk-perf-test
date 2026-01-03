import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipfs")
export default class IpfController {
  @operation({
    summary: "Get Ipfs",
  })
  @get()
  static getIpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipf",
  })
  @post("{id}")
  static createIpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
