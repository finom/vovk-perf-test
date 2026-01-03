import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqbs")
export default class JqbController {
  @operation({
    summary: "Get Jqbs",
  })
  @get()
  static getJqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqb",
  })
  @post("{id}")
  static createJqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
