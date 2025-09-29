import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilqs")
export default class IlqController {
  @operation({
    summary: "Get Ilqs",
  })
  @get()
  static getIlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilq",
  })
  @post("{id}")
  static createIlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
