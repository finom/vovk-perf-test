import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqm")
export default class JqmController {
  @operation({
    summary: "Get Jqm",
  })
  @get()
  static getJqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqm",
  })
  @post("{id}")
  static createJqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
