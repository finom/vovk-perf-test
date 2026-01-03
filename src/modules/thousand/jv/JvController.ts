import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvs")
export default class JvController {
  @operation({
    summary: "Get Jvs",
  })
  @get()
  static getJvs = procedure({
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
