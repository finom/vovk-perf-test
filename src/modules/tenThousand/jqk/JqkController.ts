import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqks")
export default class JqkController {
  @operation({
    summary: "Get Jqks",
  })
  @get()
  static getJqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqk",
  })
  @post("{id}")
  static createJqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
