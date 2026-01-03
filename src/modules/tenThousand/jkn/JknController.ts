import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkns")
export default class JknController {
  @operation({
    summary: "Get Jkns",
  })
  @get()
  static getJkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkn",
  })
  @post("{id}")
  static createJkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
