import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnns")
export default class LnnController {
  @operation({
    summary: "Get Lnns",
  })
  @get()
  static getLnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnn",
  })
  @post("{id}")
  static createLnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
