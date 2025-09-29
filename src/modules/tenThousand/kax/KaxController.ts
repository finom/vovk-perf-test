import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaxes")
export default class KaxController {
  @operation({
    summary: "Get Kaxes",
  })
  @get()
  static getKaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kax",
  })
  @post("{id}")
  static createKax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
