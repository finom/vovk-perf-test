import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fjjs")
export default class FjjController {
  @operation({
    summary: "Get Fjjs",
  })
  @get()
  static getFjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fjj",
  })
  @post("{id}")
  static createFjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
