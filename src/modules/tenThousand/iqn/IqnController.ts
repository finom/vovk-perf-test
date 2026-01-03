import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqns")
export default class IqnController {
  @operation({
    summary: "Get Iqns",
  })
  @get()
  static getIqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqn",
  })
  @post("{id}")
  static createIqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
