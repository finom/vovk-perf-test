import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnes")
export default class CneController {
  @operation({
    summary: "Get Cnes",
  })
  @get()
  static getCnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cne",
  })
  @post("{id}")
  static createCne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
