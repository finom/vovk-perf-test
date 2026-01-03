import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fphs")
export default class FphController {
  @operation({
    summary: "Get Fphs",
  })
  @get()
  static getFphs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fph",
  })
  @post("{id}")
  static createFph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
