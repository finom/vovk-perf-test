import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecps")
export default class EcpController {
  @operation({
    summary: "Get Ecps",
  })
  @get()
  static getEcps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecp",
  })
  @post("{id}")
  static createEcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
