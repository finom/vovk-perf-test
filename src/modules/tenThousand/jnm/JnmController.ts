import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnms")
export default class JnmController {
  @operation({
    summary: "Get Jnms",
  })
  @get()
  static getJnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnm",
  })
  @post("{id}")
  static createJnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
