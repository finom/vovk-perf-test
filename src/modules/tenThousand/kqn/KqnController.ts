import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqns")
export default class KqnController {
  @operation({
    summary: "Get Kqns",
  })
  @get()
  static getKqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqn",
  })
  @post("{id}")
  static createKqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
