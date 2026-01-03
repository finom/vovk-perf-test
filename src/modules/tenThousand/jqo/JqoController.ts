import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqos")
export default class JqoController {
  @operation({
    summary: "Get Jqos",
  })
  @get()
  static getJqos = procedure({
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
