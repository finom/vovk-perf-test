import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtjs")
export default class JtjController {
  @operation({
    summary: "Get Jtjs",
  })
  @get()
  static getJtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtj",
  })
  @post("{id}")
  static createJtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
