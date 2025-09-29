import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dols")
export default class DolController {
  @operation({
    summary: "Get Dols",
  })
  @get()
  static getDols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dol",
  })
  @post("{id}")
  static createDol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
