import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjs")
export default class KjsController {
  @operation({
    summary: "Get Kjs",
  })
  @get()
  static getKjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjs",
  })
  @post("{id}")
  static createKjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
