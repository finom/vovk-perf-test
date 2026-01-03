import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqhs")
export default class JqhController {
  @operation({
    summary: "Get Jqhs",
  })
  @get()
  static getJqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqh",
  })
  @post("{id}")
  static createJqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
