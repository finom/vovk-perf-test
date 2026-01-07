import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqy")
export default class JqyController {
  @operation({
    summary: "Get Jqy",
  })
  @get()
  static getJqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqy",
  })
  @post("{id}")
  static createJqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
