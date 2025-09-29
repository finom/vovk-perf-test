import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kigs")
export default class KigController {
  @operation({
    summary: "Get Kigs",
  })
  @get()
  static getKigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kig",
  })
  @post("{id}")
  static createKig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
