import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezqs")
export default class EzqController {
  @operation({
    summary: "Get Ezqs",
  })
  @get()
  static getEzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezq",
  })
  @post("{id}")
  static createEzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
