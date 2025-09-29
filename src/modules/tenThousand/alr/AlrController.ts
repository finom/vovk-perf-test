import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alrs")
export default class AlrController {
  @operation({
    summary: "Get Alrs",
  })
  @get()
  static getAlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alr",
  })
  @post("{id}")
  static createAlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
