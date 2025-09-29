import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgcs")
export default class KgcController {
  @operation({
    summary: "Get Kgcs",
  })
  @get()
  static getKgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgc",
  })
  @post("{id}")
  static createKgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
