import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnq")
export default class JnqController {
  @operation({
    summary: "Get Jnq",
  })
  @get()
  static getJnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnq",
  })
  @post("{id}")
  static createJnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
