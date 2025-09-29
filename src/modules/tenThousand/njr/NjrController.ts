import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njrs")
export default class NjrController {
  @operation({
    summary: "Get Njrs",
  })
  @get()
  static getNjrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njr",
  })
  @post("{id}")
  static createNjr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
