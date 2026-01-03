import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpjs")
export default class FpjController {
  @operation({
    summary: "Get Fpjs",
  })
  @get()
  static getFpjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpj",
  })
  @post("{id}")
  static createFpj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
