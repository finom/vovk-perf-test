import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkps")
export default class FkpController {
  @operation({
    summary: "Get Fkps",
  })
  @get()
  static getFkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkp",
  })
  @post("{id}")
  static createFkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
