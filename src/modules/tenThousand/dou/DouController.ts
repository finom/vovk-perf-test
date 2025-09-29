import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dous")
export default class DouController {
  @operation({
    summary: "Get Dous",
  })
  @get()
  static getDous = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dou",
  })
  @post("{id}")
  static createDou = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
