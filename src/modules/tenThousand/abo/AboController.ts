import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abo")
export default class AboController {
  @operation({
    summary: "Get Abo",
  })
  @get()
  static getAbo = procedure({
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
