import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqo")
export default class JqoController {
  @operation({
    summary: "Get Jqo",
  })
  @get()
  static getJqo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqo",
  })
  @post("{id}")
  static createJqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
