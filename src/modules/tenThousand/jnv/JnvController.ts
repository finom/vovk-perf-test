import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnvs")
export default class JnvController {
  @operation({
    summary: "Get Jnvs",
  })
  @get()
  static getJnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnv",
  })
  @post("{id}")
  static createJnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
