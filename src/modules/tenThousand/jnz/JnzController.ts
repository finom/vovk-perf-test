import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnz")
export default class JnzController {
  @operation({
    summary: "Get Jnz",
  })
  @get()
  static getJnz = procedure({
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
