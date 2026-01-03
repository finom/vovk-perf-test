import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkbs")
export default class JkbController {
  @operation({
    summary: "Get Jkbs",
  })
  @get()
  static getJkbs = procedure({
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
