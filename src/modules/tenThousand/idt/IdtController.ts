import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idts")
export default class IdtController {
  @operation({
    summary: "Get Idts",
  })
  @get()
  static getIdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idt",
  })
  @post("{id}")
  static createIdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
