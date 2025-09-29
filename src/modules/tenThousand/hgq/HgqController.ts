import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgqs")
export default class HgqController {
  @operation({
    summary: "Get Hgqs",
  })
  @get()
  static getHgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgq",
  })
  @post("{id}")
  static createHgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
