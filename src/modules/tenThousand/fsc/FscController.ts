import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fscs")
export default class FscController {
  @operation({
    summary: "Get Fscs",
  })
  @get()
  static getFscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsc",
  })
  @post("{id}")
  static createFsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
