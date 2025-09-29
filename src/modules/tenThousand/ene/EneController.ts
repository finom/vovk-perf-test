import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enes")
export default class EneController {
  @operation({
    summary: "Get Enes",
  })
  @get()
  static getEnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ene",
  })
  @post("{id}")
  static createEne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
