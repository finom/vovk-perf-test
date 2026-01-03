import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckvs")
export default class CkvController {
  @operation({
    summary: "Get Ckvs",
  })
  @get()
  static getCkvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckv",
  })
  @post("{id}")
  static createCkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
