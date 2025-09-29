import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fahs")
export default class FahController {
  @operation({
    summary: "Get Fahs",
  })
  @get()
  static getFahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fah",
  })
  @post("{id}")
  static createFah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
