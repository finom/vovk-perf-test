import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyfs")
export default class DyfController {
  @operation({
    summary: "Get Dyfs",
  })
  @get()
  static getDyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyf",
  })
  @post("{id}")
  static createDyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
