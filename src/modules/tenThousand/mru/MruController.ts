import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrus")
export default class MruController {
  @operation({
    summary: "Get Mrus",
  })
  @get()
  static getMrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mru",
  })
  @post("{id}")
  static createMru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
