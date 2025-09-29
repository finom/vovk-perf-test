import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixqs")
export default class IxqController {
  @operation({
    summary: "Get Ixqs",
  })
  @get()
  static getIxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixq",
  })
  @post("{id}")
  static createIxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
