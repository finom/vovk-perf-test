import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnzs")
export default class JnzController {
  @operation({
    summary: "Get Jnzs",
  })
  @get()
  static getJnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnz",
  })
  @post("{id}")
  static createJnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
