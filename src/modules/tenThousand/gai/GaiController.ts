import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gais")
export default class GaiController {
  @operation({
    summary: "Get Gais",
  })
  @get()
  static getGais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gai",
  })
  @post("{id}")
  static createGai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
