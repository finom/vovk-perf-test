import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aes")
export default class AesController {
  @operation({
    summary: "Get Aes",
  })
  @get()
  static getAes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aes",
  })
  @post("{id}")
  static createAes = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
