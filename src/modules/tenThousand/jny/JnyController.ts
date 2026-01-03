import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnies")
export default class JnyController {
  @operation({
    summary: "Get Jnies",
  })
  @get()
  static getJnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jny",
  })
  @post("{id}")
  static createJny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
