import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqn")
export default class JqnController {
  @operation({
    summary: "Get Jqn",
  })
  @get()
  static getJqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqn",
  })
  @post("{id}")
  static createJqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
