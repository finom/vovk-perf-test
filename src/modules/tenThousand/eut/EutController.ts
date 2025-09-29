import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euts")
export default class EutController {
  @operation({
    summary: "Get Euts",
  })
  @get()
  static getEuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eut",
  })
  @post("{id}")
  static createEut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
