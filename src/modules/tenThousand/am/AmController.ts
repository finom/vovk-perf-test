import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ams")
export default class AmController {
  @operation({
    summary: "Get Ams",
  })
  @get()
  static getAms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Am",
  })
  @post("{id}")
  static createAm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
