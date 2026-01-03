import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqns")
export default class AqnController {
  @operation({
    summary: "Get Aqns",
  })
  @get()
  static getAqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqn",
  })
  @post("{id}")
  static createAqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
