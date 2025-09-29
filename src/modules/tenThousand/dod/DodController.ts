import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dods")
export default class DodController {
  @operation({
    summary: "Get Dods",
  })
  @get()
  static getDods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dod",
  })
  @post("{id}")
  static createDod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
