import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwks")
export default class MwkController {
  @operation({
    summary: "Get Mwks",
  })
  @get()
  static getMwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwk",
  })
  @post("{id}")
  static createMwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
