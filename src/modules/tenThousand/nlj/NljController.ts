import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nljs")
export default class NljController {
  @operation({
    summary: "Get Nljs",
  })
  @get()
  static getNljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlj",
  })
  @post("{id}")
  static createNlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
