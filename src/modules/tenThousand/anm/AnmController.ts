import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anm")
export default class AnmController {
  @operation({
    summary: "Get Anm",
  })
  @get()
  static getAnm = procedure({
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
