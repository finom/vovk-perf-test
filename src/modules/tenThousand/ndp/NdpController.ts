import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndp")
export default class NdpController {
  @operation({
    summary: "Get Ndp",
  })
  @get()
  static getNdp = procedure({
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
