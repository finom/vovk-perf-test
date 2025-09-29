import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hins")
export default class HinController {
  @operation({
    summary: "Get Hins",
  })
  @get()
  static getHins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hin",
  })
  @post("{id}")
  static createHin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
