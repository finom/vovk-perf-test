import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aavs")
export default class AavController {
  @operation({
    summary: "Get Aavs",
  })
  @get()
  static getAavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aav",
  })
  @post("{id}")
  static createAav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
