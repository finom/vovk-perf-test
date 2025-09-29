import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huqs")
export default class HuqController {
  @operation({
    summary: "Get Huqs",
  })
  @get()
  static getHuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huq",
  })
  @post("{id}")
  static createHuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
