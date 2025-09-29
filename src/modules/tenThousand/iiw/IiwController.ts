import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iiws")
export default class IiwController {
  @operation({
    summary: "Get Iiws",
  })
  @get()
  static getIiws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iiw",
  })
  @post("{id}")
  static createIiw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
