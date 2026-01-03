import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnos")
export default class JnoController {
  @operation({
    summary: "Get Jnos",
  })
  @get()
  static getJnos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jno",
  })
  @post("{id}")
  static createJno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
