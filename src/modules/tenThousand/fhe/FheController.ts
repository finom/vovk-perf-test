import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhe")
export default class FheController {
  @operation({
    summary: "Get Fhe",
  })
  @get()
  static getFhe = procedure({
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
