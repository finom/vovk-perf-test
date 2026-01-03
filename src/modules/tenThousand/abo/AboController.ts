import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abos")
export default class AboController {
  @operation({
    summary: "Get Abos",
  })
  @get()
  static getAbos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abo",
  })
  @post("{id}")
  static createAbo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
