import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jke")
export default class JkeController {
  @operation({
    summary: "Get Jke",
  })
  @get()
  static getJke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jke",
  })
  @post("{id}")
  static createJke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
