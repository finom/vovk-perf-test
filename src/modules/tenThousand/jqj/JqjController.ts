import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqj")
export default class JqjController {
  @operation({
    summary: "Get Jqj",
  })
  @get()
  static getJqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqj",
  })
  @post("{id}")
  static createJqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
