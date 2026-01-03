import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldps")
export default class LdpController {
  @operation({
    summary: "Get Ldps",
  })
  @get()
  static getLdps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldp",
  })
  @post("{id}")
  static createLdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
