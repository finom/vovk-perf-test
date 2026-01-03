import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqls")
export default class JqlController {
  @operation({
    summary: "Get Jqls",
  })
  @get()
  static getJqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jql",
  })
  @post("{id}")
  static createJql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
