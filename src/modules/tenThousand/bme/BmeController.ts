import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmes")
export default class BmeController {
  @operation({
    summary: "Get Bmes",
  })
  @get()
  static getBmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bme",
  })
  @post("{id}")
  static createBme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
