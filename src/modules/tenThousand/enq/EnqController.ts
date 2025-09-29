import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enqs")
export default class EnqController {
  @operation({
    summary: "Get Enqs",
  })
  @get()
  static getEnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enq",
  })
  @post("{id}")
  static createEnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
