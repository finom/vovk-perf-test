import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kers")
export default class KerController {
  @operation({
    summary: "Get Kers",
  })
  @get()
  static getKers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ker",
  })
  @post("{id}")
  static createKer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
