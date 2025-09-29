import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehfs")
export default class EhfController {
  @operation({
    summary: "Get Ehfs",
  })
  @get()
  static getEhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehf",
  })
  @post("{id}")
  static createEhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
