import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnf")
export default class JnfController {
  @operation({
    summary: "Get Jnf",
  })
  @get()
  static getJnf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnf",
  })
  @post("{id}")
  static createJnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
