import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnps")
export default class LnpController {
  @operation({
    summary: "Get Lnps",
  })
  @get()
  static getLnps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnp",
  })
  @post("{id}")
  static createLnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
