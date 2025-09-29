import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gms")
export default class GmsController {
  @operation({
    summary: "Get Gms",
  })
  @get()
  static getGms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gms",
  })
  @post("{id}")
  static createGms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
