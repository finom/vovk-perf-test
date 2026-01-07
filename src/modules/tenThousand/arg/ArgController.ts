import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arg")
export default class ArgController {
  @operation({
    summary: "Get Arg",
  })
  @get()
  static getArg = procedure({
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
