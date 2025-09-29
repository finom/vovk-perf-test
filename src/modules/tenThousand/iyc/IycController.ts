import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iycs")
export default class IycController {
  @operation({
    summary: "Get Iycs",
  })
  @get()
  static getIycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyc",
  })
  @post("{id}")
  static createIyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
