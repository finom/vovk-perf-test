import { procedure, prefix, get, post, operation } from "vovk";

@prefix("japs")
export default class JapController {
  @operation({
    summary: "Get Japs",
  })
  @get()
  static getJaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jap",
  })
  @post("{id}")
  static createJap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
