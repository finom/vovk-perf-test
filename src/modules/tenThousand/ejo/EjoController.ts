import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejos")
export default class EjoController {
  @operation({
    summary: "Get Ejos",
  })
  @get()
  static getEjos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejo",
  })
  @post("{id}")
  static createEjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
