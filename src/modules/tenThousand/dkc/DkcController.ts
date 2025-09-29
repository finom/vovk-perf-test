import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkcs")
export default class DkcController {
  @operation({
    summary: "Get Dkcs",
  })
  @get()
  static getDkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkc",
  })
  @post("{id}")
  static createDkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
