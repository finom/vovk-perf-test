import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kucs")
export default class KucController {
  @operation({
    summary: "Get Kucs",
  })
  @get()
  static getKucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuc",
  })
  @post("{id}")
  static createKuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
