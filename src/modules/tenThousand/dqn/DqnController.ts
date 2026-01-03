import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqns")
export default class DqnController {
  @operation({
    summary: "Get Dqns",
  })
  @get()
  static getDqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqn",
  })
  @post("{id}")
  static createDqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
