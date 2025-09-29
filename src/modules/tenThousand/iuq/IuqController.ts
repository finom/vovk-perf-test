import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuqs")
export default class IuqController {
  @operation({
    summary: "Get Iuqs",
  })
  @get()
  static getIuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuq",
  })
  @post("{id}")
  static createIuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
