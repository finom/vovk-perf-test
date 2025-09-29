import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdes")
export default class KdeController {
  @operation({
    summary: "Get Kdes",
  })
  @get()
  static getKdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kde",
  })
  @post("{id}")
  static createKde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
