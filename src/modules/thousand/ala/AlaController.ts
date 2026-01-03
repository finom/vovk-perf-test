import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alas")
export default class AlaController {
  @operation({
    summary: "Get Alas",
  })
  @get()
  static getAlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ala",
  })
  @post("{id}")
  static createAla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
