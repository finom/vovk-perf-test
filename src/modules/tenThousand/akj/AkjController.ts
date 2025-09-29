import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akjs")
export default class AkjController {
  @operation({
    summary: "Get Akjs",
  })
  @get()
  static getAkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akj",
  })
  @post("{id}")
  static createAkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
