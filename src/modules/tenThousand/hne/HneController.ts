import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnes")
export default class HneController {
  @operation({
    summary: "Get Hnes",
  })
  @get()
  static getHnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hne",
  })
  @post("{id}")
  static createHne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
