import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huns")
export default class HunController {
  @operation({
    summary: "Get Huns",
  })
  @get()
  static getHuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hun",
  })
  @post("{id}")
  static createHun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
