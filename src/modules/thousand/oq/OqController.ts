import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oqs")
export default class OqController {
  @operation({
    summary: "Get Oqs",
  })
  @get()
  static getOqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oq",
  })
  @post("{id}")
  static createOq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
