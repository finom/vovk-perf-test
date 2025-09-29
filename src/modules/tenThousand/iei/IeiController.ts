import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieis")
export default class IeiController {
  @operation({
    summary: "Get Ieis",
  })
  @get()
  static getIeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iei",
  })
  @post("{id}")
  static createIei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
