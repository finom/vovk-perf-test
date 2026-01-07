import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkz")
export default class JkzController {
  @operation({
    summary: "Get Jkz",
  })
  @get()
  static getJkz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkz",
  })
  @post("{id}")
  static createJkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
