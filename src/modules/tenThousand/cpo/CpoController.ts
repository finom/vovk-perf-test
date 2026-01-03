import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpos")
export default class CpoController {
  @operation({
    summary: "Get Cpos",
  })
  @get()
  static getCpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cpo",
  })
  @post("{id}")
  static createCpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
