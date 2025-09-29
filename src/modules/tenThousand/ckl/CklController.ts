import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckls")
export default class CklController {
  @operation({
    summary: "Get Ckls",
  })
  @get()
  static getCkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckl",
  })
  @post("{id}")
  static createCkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
