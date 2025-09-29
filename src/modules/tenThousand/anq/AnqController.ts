import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anqs")
export default class AnqController {
  @operation({
    summary: "Get Anqs",
  })
  @get()
  static getAnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anq",
  })
  @post("{id}")
  static createAnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
