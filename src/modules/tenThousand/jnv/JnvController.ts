import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnv")
export default class JnvController {
  @operation({
    summary: "Get Jnv",
  })
  @get()
  static getJnv = procedure({
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
