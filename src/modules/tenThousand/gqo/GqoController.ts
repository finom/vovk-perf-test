import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqos")
export default class GqoController {
  @operation({
    summary: "Get Gqos",
  })
  @get()
  static getGqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqo",
  })
  @post("{id}")
  static createGqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
