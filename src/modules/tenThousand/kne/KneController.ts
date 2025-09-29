import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knes")
export default class KneController {
  @operation({
    summary: "Get Knes",
  })
  @get()
  static getKnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kne",
  })
  @post("{id}")
  static createKne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
