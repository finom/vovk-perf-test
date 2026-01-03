import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amas")
export default class AmaController {
  @operation({
    summary: "Get Amas",
  })
  @get()
  static getAmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ama",
  })
  @post("{id}")
  static createAma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
