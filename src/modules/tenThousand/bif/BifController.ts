import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bifs")
export default class BifController {
  @operation({
    summary: "Get Bifs",
  })
  @get()
  static getBifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bif",
  })
  @post("{id}")
  static createBif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
