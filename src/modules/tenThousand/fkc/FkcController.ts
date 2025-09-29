import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkcs")
export default class FkcController {
  @operation({
    summary: "Get Fkcs",
  })
  @get()
  static getFkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkc",
  })
  @post("{id}")
  static createFkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
