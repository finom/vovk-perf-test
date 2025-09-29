import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erts")
export default class ErtController {
  @operation({
    summary: "Get Erts",
  })
  @get()
  static getErts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ert",
  })
  @post("{id}")
  static createErt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
