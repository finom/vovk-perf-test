import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abm")
export default class AbmController {
  @operation({
    summary: "Get Abm",
  })
  @get()
  static getAbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abm",
  })
  @post("{id}")
  static createAbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
