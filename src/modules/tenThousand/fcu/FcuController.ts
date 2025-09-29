import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcus")
export default class FcuController {
  @operation({
    summary: "Get Fcus",
  })
  @get()
  static getFcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcu",
  })
  @post("{id}")
  static createFcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
