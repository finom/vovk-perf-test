import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gujs")
export default class GujController {
  @operation({
    summary: "Get Gujs",
  })
  @get()
  static getGujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guj",
  })
  @post("{id}")
  static createGuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
