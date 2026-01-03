import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwjs")
export default class MwjController {
  @operation({
    summary: "Get Mwjs",
  })
  @get()
  static getMwjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwj",
  })
  @post("{id}")
  static createMwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
