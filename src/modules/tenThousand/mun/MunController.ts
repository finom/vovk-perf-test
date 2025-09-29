import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muns")
export default class MunController {
  @operation({
    summary: "Get Muns",
  })
  @get()
  static getMuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mun",
  })
  @post("{id}")
  static createMun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
