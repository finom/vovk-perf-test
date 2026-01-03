import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fons")
export default class FonController {
  @operation({
    summary: "Get Fons",
  })
  @get()
  static getFons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fon",
  })
  @post("{id}")
  static createFon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
