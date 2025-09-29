import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("biws")
export default class BiwController {
  @operation({
    summary: "Get Biws",
  })
  @get()
  static getBiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Biw",
  })
  @post("{id}")
  static createBiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
