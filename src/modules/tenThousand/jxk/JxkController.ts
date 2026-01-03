import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxks")
export default class JxkController {
  @operation({
    summary: "Get Jxks",
  })
  @get()
  static getJxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxk",
  })
  @post("{id}")
  static createJxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
