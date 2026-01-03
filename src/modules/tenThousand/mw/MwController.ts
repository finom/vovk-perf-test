import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mws")
export default class MwController {
  @operation({
    summary: "Get Mws",
  })
  @get()
  static getMws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mw",
  })
  @post("{id}")
  static createMw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
