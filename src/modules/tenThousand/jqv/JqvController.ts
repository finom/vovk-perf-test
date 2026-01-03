import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqvs")
export default class JqvController {
  @operation({
    summary: "Get Jqvs",
  })
  @get()
  static getJqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqv",
  })
  @post("{id}")
  static createJqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
