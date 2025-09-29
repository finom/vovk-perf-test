import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlis")
export default class DliController {
  @operation({
    summary: "Get Dlis",
  })
  @get()
  static getDlis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dli",
  })
  @post("{id}")
  static createDli = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
