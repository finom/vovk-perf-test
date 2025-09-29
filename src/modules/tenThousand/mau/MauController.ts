import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maus")
export default class MauController {
  @operation({
    summary: "Get Maus",
  })
  @get()
  static getMaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mau",
  })
  @post("{id}")
  static createMau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
