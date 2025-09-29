import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("naus")
export default class NauController {
  @operation({
    summary: "Get Naus",
  })
  @get()
  static getNaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nau",
  })
  @post("{id}")
  static createNau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
