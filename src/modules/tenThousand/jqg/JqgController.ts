import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqg")
export default class JqgController {
  @operation({
    summary: "Get Jqg",
  })
  @get()
  static getJqg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqg",
  })
  @post("{id}")
  static createJqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
