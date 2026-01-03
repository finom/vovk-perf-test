import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jexes")
export default class JexController {
  @operation({
    summary: "Get Jexes",
  })
  @get()
  static getJexes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jex",
  })
  @post("{id}")
  static createJex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
