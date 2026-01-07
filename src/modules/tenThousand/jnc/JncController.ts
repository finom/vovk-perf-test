import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnc")
export default class JncController {
  @operation({
    summary: "Get Jnc",
  })
  @get()
  static getJnc = procedure({
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
