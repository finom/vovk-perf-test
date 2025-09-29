import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaus")
export default class KauController {
  @operation({
    summary: "Get Kaus",
  })
  @get()
  static getKaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kau",
  })
  @post("{id}")
  static createKau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
