import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdp")
export default class KdpController {
  @operation({
    summary: "Get Kdp",
  })
  @get()
  static getKdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdp",
  })
  @post("{id}")
  static createKdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
