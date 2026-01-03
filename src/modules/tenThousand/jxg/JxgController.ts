import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxgs")
export default class JxgController {
  @operation({
    summary: "Get Jxgs",
  })
  @get()
  static getJxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxg",
  })
  @post("{id}")
  static createJxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
