import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnp")
export default class JnpController {
  @operation({
    summary: "Get Jnp",
  })
  @get()
  static getJnp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnp",
  })
  @post("{id}")
  static createJnp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
