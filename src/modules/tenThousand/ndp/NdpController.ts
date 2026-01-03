import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndps")
export default class NdpController {
  @operation({
    summary: "Get Ndps",
  })
  @get()
  static getNdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndp",
  })
  @post("{id}")
  static createNdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
