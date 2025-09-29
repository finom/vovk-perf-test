import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eis")
export default class EisController {
  @operation({
    summary: "Get Eis",
  })
  @get()
  static getEis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eis",
  })
  @post("{id}")
  static createEis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
