import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imas")
export default class ImaController {
  @operation({
    summary: "Get Imas",
  })
  @get()
  static getImas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ima",
  })
  @post("{id}")
  static createIma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
