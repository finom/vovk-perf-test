import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkfs")
export default class FkfController {
  @operation({
    summary: "Get Fkfs",
  })
  @get()
  static getFkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkf",
  })
  @post("{id}")
  static createFkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
