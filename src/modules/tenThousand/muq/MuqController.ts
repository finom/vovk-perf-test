import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muqs")
export default class MuqController {
  @operation({
    summary: "Get Muqs",
  })
  @get()
  static getMuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muq",
  })
  @post("{id}")
  static createMuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
