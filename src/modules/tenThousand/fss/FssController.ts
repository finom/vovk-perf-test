import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsses")
export default class FssController {
  @operation({
    summary: "Get Fsses",
  })
  @get()
  static getFsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fss",
  })
  @post("{id}")
  static createFss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
