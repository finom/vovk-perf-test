import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvvs")
export default class JvvController {
  @operation({
    summary: "Get Jvvs",
  })
  @get()
  static getJvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvv",
  })
  @post("{id}")
  static createJvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
