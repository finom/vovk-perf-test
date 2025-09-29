import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blrs")
export default class BlrController {
  @operation({
    summary: "Get Blrs",
  })
  @get()
  static getBlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blr",
  })
  @post("{id}")
  static createBlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
