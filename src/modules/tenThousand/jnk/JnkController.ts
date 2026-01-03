import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnks")
export default class JnkController {
  @operation({
    summary: "Get Jnks",
  })
  @get()
  static getJnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnk",
  })
  @post("{id}")
  static createJnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
