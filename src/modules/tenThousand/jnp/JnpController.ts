import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnps")
export default class JnpController {
  @operation({
    summary: "Get Jnps",
  })
  @get()
  static getJnps = procedure({
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
