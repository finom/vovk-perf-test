import { procedure, prefix, get, post, operation } from "vovk";

@prefix("have")
export default class HasController {
  @operation({
    summary: "Get Have",
  })
  @get()
  static getHave = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Has",
  })
  @post("{id}")
  static createHas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
