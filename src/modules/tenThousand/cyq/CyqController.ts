import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyqs")
export default class CyqController {
  @operation({
    summary: "Get Cyqs",
  })
  @get()
  static getCyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyq",
  })
  @post("{id}")
  static createCyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
