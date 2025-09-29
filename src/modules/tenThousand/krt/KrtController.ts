import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krts")
export default class KrtController {
  @operation({
    summary: "Get Krts",
  })
  @get()
  static getKrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krt",
  })
  @post("{id}")
  static createKrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
