import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drus")
export default class DruController {
  @operation({
    summary: "Get Drus",
  })
  @get()
  static getDrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dru",
  })
  @post("{id}")
  static createDru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
