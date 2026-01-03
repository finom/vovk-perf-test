import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqgs")
export default class JqgController {
  @operation({
    summary: "Get Jqgs",
  })
  @get()
  static getJqgs = procedure({
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
