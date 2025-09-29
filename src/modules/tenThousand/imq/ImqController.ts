import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imqs")
export default class ImqController {
  @operation({
    summary: "Get Imqs",
  })
  @get()
  static getImqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imq",
  })
  @post("{id}")
  static createImq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
