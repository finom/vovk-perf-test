import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anms")
export default class AnmController {
  @operation({
    summary: "Get Anms",
  })
  @get()
  static getAnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anm",
  })
  @post("{id}")
  static createAnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
