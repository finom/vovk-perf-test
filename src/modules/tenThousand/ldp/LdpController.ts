import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldp")
export default class LdpController {
  @operation({
    summary: "Get Ldp",
  })
  @get()
  static getLdp = procedure({
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
