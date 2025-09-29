import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbos")
export default class GboController {
  @operation({
    summary: "Get Gbos",
  })
  @get()
  static getGbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbo",
  })
  @post("{id}")
  static createGbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
