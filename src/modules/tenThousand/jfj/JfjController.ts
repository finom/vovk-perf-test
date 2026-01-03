import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfjs")
export default class JfjController {
  @operation({
    summary: "Get Jfjs",
  })
  @get()
  static getJfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfj",
  })
  @post("{id}")
  static createJfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
