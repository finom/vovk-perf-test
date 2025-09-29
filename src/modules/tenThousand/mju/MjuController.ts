import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjus")
export default class MjuController {
  @operation({
    summary: "Get Mjus",
  })
  @get()
  static getMjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mju",
  })
  @post("{id}")
  static createMju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
