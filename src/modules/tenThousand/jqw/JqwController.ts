import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqw")
export default class JqwController {
  @operation({
    summary: "Get Jqw",
  })
  @get()
  static getJqw = procedure({
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
