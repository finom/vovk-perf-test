import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqms")
export default class JqmController {
  @operation({
    summary: "Get Jqms",
  })
  @get()
  static getJqms = procedure({
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
