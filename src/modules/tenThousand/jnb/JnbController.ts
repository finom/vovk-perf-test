import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnb")
export default class JnbController {
  @operation({
    summary: "Get Jnb",
  })
  @get()
  static getJnb = procedure({
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
