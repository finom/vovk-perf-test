import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdp")
export default class BdpController {
  @operation({
    summary: "Get Bdp",
  })
  @get()
  static getBdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdp",
  })
  @post("{id}")
  static createBdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
