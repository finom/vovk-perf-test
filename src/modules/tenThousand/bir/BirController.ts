import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("birs")
export default class BirController {
  @operation({
    summary: "Get Birs",
  })
  @get()
  static getBirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bir",
  })
  @post("{id}")
  static createBir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
