import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnk")
export default class JnkController {
  @operation({
    summary: "Get Jnk",
  })
  @get()
  static getJnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnk",
  })
  @post("{id}")
  static createJnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
