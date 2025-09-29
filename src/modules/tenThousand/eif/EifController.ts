import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eifs")
export default class EifController {
  @operation({
    summary: "Get Eifs",
  })
  @get()
  static getEifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eif",
  })
  @post("{id}")
  static createEif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
