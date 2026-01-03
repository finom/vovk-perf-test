import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aats")
export default class AatController {
  @operation({
    summary: "Get Aats",
  })
  @get()
  static getAats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aat",
  })
  @post("{id}")
  static createAat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
