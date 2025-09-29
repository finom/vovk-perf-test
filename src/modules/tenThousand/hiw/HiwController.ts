import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hiws")
export default class HiwController {
  @operation({
    summary: "Get Hiws",
  })
  @get()
  static getHiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hiw",
  })
  @post("{id}")
  static createHiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
