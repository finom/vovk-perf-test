import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifhs")
export default class IfhController {
  @operation({
    summary: "Get Ifhs",
  })
  @get()
  static getIfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifh",
  })
  @post("{id}")
  static createIfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
