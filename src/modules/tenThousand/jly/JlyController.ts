import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlies")
export default class JlyController {
  @operation({
    summary: "Get Jlies",
  })
  @get()
  static getJlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jly",
  })
  @post("{id}")
  static createJly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
