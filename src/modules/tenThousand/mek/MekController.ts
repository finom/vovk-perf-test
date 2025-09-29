import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meks")
export default class MekController {
  @operation({
    summary: "Get Meks",
  })
  @get()
  static getMeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mek",
  })
  @post("{id}")
  static createMek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
