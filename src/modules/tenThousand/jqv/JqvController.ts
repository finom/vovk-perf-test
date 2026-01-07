import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqv")
export default class JqvController {
  @operation({
    summary: "Get Jqv",
  })
  @get()
  static getJqv = procedure({
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
