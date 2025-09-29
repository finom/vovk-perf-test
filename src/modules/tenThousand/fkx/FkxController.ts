import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkxes")
export default class FkxController {
  @operation({
    summary: "Get Fkxes",
  })
  @get()
  static getFkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkx",
  })
  @post("{id}")
  static createFkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
