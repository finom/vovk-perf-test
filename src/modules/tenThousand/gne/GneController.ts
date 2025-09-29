import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnes")
export default class GneController {
  @operation({
    summary: "Get Gnes",
  })
  @get()
  static getGnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gne",
  })
  @post("{id}")
  static createGne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
