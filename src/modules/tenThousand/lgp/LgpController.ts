import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgp")
export default class LgpController {
  @operation({
    summary: "Get Lgp",
  })
  @get()
  static getLgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgp",
  })
  @post("{id}")
  static createLgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
