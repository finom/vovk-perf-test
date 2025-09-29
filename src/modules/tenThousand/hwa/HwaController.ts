import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hwas")
export default class HwaController {
  @operation({
    summary: "Get Hwas",
  })
  @get()
  static getHwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hwa",
  })
  @post("{id}")
  static createHwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
