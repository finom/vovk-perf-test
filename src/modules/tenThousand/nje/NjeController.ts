import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njes")
export default class NjeController {
  @operation({
    summary: "Get Njes",
  })
  @get()
  static getNjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nje",
  })
  @post("{id}")
  static createNje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
