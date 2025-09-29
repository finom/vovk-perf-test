import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbes")
export default class HbeController {
  @operation({
    summary: "Get Hbes",
  })
  @get()
  static getHbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbe",
  })
  @post("{id}")
  static createHbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
