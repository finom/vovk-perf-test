import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlr")
export default class JlrController {
  @operation({
    summary: "Get Jlr",
  })
  @get()
  static getJlr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlr",
  })
  @post("{id}")
  static createJlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
