import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkb")
export default class JkbController {
  @operation({
    summary: "Get Jkb",
  })
  @get()
  static getJkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkb",
  })
  @post("{id}")
  static createJkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
