import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cghs")
export default class CghController {
  @operation({
    summary: "Get Cghs",
  })
  @get()
  static getCghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgh",
  })
  @post("{id}")
  static createCgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
