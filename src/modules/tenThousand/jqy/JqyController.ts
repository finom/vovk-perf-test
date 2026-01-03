import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqies")
export default class JqyController {
  @operation({
    summary: "Get Jqies",
  })
  @get()
  static getJqies = procedure({
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
