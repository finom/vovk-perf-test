import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgps")
export default class BgpController {
  @operation({
    summary: "Get Bgps",
  })
  @get()
  static getBgps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgp",
  })
  @post("{id}")
  static createBgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
