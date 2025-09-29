import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuns")
export default class CunController {
  @operation({
    summary: "Get Cuns",
  })
  @get()
  static getCuns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cun",
  })
  @post("{id}")
  static createCun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
