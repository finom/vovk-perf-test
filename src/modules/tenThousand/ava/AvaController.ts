import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avas")
export default class AvaController {
  @operation({
    summary: "Get Avas",
  })
  @get()
  static getAvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ava",
  })
  @post("{id}")
  static createAva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
