import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnw")
export default class JnwController {
  @operation({
    summary: "Get Jnw",
  })
  @get()
  static getJnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnw",
  })
  @post("{id}")
  static createJnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
