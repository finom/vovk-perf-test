import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrfs")
export default class JrfController {
  @operation({
    summary: "Get Jrfs",
  })
  @get()
  static getJrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrf",
  })
  @post("{id}")
  static createJrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
