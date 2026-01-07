import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mw")
export default class MwController {
  @operation({
    summary: "Get Mw",
  })
  @get()
  static getMw = procedure({
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
