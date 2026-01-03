import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhes")
export default class FheController {
  @operation({
    summary: "Get Fhes",
  })
  @get()
  static getFhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhe",
  })
  @post("{id}")
  static createFhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
