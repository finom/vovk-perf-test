import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfm")
export default class JfmController {
  @operation({
    summary: "Get Jfm",
  })
  @get()
  static getJfm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfm",
  })
  @post("{id}")
  static createJfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
