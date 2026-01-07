import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnx")
export default class JnxController {
  @operation({
    summary: "Get Jnx",
  })
  @get()
  static getJnx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnx",
  })
  @post("{id}")
  static createJnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
