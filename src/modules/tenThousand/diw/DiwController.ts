import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("diws")
export default class DiwController {
  @operation({
    summary: "Get Diws",
  })
  @get()
  static getDiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Diw",
  })
  @post("{id}")
  static createDiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
