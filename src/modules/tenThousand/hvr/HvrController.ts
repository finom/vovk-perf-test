import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvrs")
export default class HvrController {
  @operation({
    summary: "Get Hvrs",
  })
  @get()
  static getHvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvr",
  })
  @post("{id}")
  static createHvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
