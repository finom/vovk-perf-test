import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwos")
export default class JwoController {
  @operation({
    summary: "Get Jwos",
  })
  @get()
  static getJwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwo",
  })
  @post("{id}")
  static createJwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
