import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hihs")
export default class HihController {
  @operation({
    summary: "Get Hihs",
  })
  @get()
  static getHihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hih",
  })
  @post("{id}")
  static createHih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
