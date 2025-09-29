import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eris")
export default class EriController {
  @operation({
    summary: "Get Eris",
  })
  @get()
  static getEris = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eri",
  })
  @post("{id}")
  static createEri = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
