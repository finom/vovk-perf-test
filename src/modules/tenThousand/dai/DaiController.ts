import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dais")
export default class DaiController {
  @operation({
    summary: "Get Dais",
  })
  @get()
  static getDais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dai",
  })
  @post("{id}")
  static createDai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
