import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqns")
export default class HqnController {
  @operation({
    summary: "Get Hqns",
  })
  @get()
  static getHqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqn",
  })
  @post("{id}")
  static createHqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
