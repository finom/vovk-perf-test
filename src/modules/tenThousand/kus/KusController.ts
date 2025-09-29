import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuses")
export default class KusController {
  @operation({
    summary: "Get Kuses",
  })
  @get()
  static getKuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kus",
  })
  @post("{id}")
  static createKus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
