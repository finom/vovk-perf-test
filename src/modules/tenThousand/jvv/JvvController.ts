import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvv")
export default class JvvController {
  @operation({
    summary: "Get Jvv",
  })
  @get()
  static getJvv = procedure({
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
