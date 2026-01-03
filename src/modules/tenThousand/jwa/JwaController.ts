import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwas")
export default class JwaController {
  @operation({
    summary: "Get Jwas",
  })
  @get()
  static getJwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwa",
  })
  @post("{id}")
  static createJwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
