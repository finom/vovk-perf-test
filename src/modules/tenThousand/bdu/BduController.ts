import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdus")
export default class BduController {
  @operation({
    summary: "Get Bdus",
  })
  @get()
  static getBdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdu",
  })
  @post("{id}")
  static createBdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
