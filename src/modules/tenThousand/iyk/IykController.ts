import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyks")
export default class IykController {
  @operation({
    summary: "Get Iyks",
  })
  @get()
  static getIyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyk",
  })
  @post("{id}")
  static createIyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
