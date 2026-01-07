import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knu")
export default class KnuController {
  @operation({
    summary: "Get Knu",
  })
  @get()
  static getKnu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knu",
  })
  @post("{id}")
  static createKnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
