import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqns")
export default class GqnController {
  @operation({
    summary: "Get Gqns",
  })
  @get()
  static getGqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqn",
  })
  @post("{id}")
  static createGqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
