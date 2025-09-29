import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnas")
export default class FnaController {
  @operation({
    summary: "Get Fnas",
  })
  @get()
  static getFnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fna",
  })
  @post("{id}")
  static createFna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
