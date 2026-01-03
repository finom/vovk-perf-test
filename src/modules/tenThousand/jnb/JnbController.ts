import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnbs")
export default class JnbController {
  @operation({
    summary: "Get Jnbs",
  })
  @get()
  static getJnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnb",
  })
  @post("{id}")
  static createJnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
