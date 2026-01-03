import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abis")
export default class AbiController {
  @operation({
    summary: "Get Abis",
  })
  @get()
  static getAbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abi",
  })
  @post("{id}")
  static createAbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
