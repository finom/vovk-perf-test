import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abis")
export default class AbiController {
  @operation({
    summary: "Get Abis",
  })
  @get()
  static getAbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abi",
  })
  @post("{id}")
  static createAbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
