import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keqs")
export default class KeqController {
  @operation({
    summary: "Get Keqs",
  })
  @get()
  static getKeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Keq",
  })
  @post("{id}")
  static createKeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
