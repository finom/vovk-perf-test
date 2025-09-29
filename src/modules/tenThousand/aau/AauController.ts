import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaus")
export default class AauController {
  @operation({
    summary: "Get Aaus",
  })
  @get()
  static getAaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aau",
  })
  @post("{id}")
  static createAau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
