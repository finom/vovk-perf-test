import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evqs")
export default class EvqController {
  @operation({
    summary: "Get Evqs",
  })
  @get()
  static getEvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evq",
  })
  @post("{id}")
  static createEvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
