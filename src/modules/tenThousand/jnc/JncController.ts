import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jncs")
export default class JncController {
  @operation({
    summary: "Get Jncs",
  })
  @get()
  static getJncs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnc",
  })
  @post("{id}")
  static createJnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
