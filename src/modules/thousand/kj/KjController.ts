import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjs")
export default class KjController {
  @operation({
    summary: "Get Kjs",
  })
  @get()
  static getKjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kj",
  })
  @post("{id}")
  static createKj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
