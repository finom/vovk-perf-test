import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwws")
export default class MwwController {
  @operation({
    summary: "Get Mwws",
  })
  @get()
  static getMwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mww",
  })
  @post("{id}")
  static createMww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
