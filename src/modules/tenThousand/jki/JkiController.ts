import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkis")
export default class JkiController {
  @operation({
    summary: "Get Jkis",
  })
  @get()
  static getJkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jki",
  })
  @post("{id}")
  static createJki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
