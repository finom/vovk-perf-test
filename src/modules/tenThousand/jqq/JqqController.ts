import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqqs")
export default class JqqController {
  @operation({
    summary: "Get Jqqs",
  })
  @get()
  static getJqqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqq",
  })
  @post("{id}")
  static createJqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
