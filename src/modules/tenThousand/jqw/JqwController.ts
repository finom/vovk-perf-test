import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqws")
export default class JqwController {
  @operation({
    summary: "Get Jqws",
  })
  @get()
  static getJqws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqw",
  })
  @post("{id}")
  static createJqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
