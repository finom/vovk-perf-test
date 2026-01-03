import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anls")
export default class AnlController {
  @operation({
    summary: "Get Anls",
  })
  @get()
  static getAnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anl",
  })
  @post("{id}")
  static createAnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
