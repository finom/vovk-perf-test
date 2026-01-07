import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jv")
export default class JvController {
  @operation({
    summary: "Get Jv",
  })
  @get()
  static getJv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jv",
  })
  @post("{id}")
  static createJv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
