import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctks")
export default class CtkController {
  @operation({
    summary: "Get Ctks",
  })
  @get()
  static getCtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctk",
  })
  @post("{id}")
  static createCtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
