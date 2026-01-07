import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqo")
export default class GqoController {
  @operation({
    summary: "Get Gqo",
  })
  @get()
  static getGqo = procedure({
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
