import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjs")
export default class JjsController {
  @operation({
    summary: "Get Jjs",
  })
  @get()
  static getJjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjs",
  })
  @post("{id}")
  static createJjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
