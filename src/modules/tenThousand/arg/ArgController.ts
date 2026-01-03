import { procedure, prefix, get, post, operation } from "vovk";

@prefix("args")
export default class ArgController {
  @operation({
    summary: "Get Args",
  })
  @get()
  static getArgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arg",
  })
  @post("{id}")
  static createArg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
