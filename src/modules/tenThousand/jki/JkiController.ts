import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jki")
export default class JkiController {
  @operation({
    summary: "Get Jki",
  })
  @get()
  static getJki = procedure({
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
