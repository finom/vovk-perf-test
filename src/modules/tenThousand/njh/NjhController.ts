import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njhs")
export default class NjhController {
  @operation({
    summary: "Get Njhs",
  })
  @get()
  static getNjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njh",
  })
  @post("{id}")
  static createNjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
