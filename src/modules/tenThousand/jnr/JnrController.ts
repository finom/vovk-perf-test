import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnr")
export default class JnrController {
  @operation({
    summary: "Get Jnr",
  })
  @get()
  static getJnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnr",
  })
  @post("{id}")
  static createJnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
