import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahas")
export default class AhaController {
  @operation({
    summary: "Get Ahas",
  })
  @get()
  static getAhas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aha",
  })
  @post("{id}")
  static createAha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
