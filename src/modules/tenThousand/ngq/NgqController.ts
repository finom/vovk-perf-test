import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngqs")
export default class NgqController {
  @operation({
    summary: "Get Ngqs",
  })
  @get()
  static getNgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngq",
  })
  @post("{id}")
  static createNgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
