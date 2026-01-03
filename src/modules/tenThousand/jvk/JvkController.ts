import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvks")
export default class JvkController {
  @operation({
    summary: "Get Jvks",
  })
  @get()
  static getJvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvk",
  })
  @post("{id}")
  static createJvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
