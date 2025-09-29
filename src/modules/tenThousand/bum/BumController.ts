import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bums")
export default class BumController {
  @operation({
    summary: "Get Bums",
  })
  @get()
  static getBums = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bum",
  })
  @post("{id}")
  static createBum = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
