import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzts")
export default class KztController {
  @operation({
    summary: "Get Kzts",
  })
  @get()
  static getKzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzt",
  })
  @post("{id}")
  static createKzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
