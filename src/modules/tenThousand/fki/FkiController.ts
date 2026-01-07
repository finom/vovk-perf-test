import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fki")
export default class FkiController {
  @operation({
    summary: "Get Fki",
  })
  @get()
  static getFki = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fki",
  })
  @post("{id}")
  static createFki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
