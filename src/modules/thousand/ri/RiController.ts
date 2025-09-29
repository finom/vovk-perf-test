import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ris")
export default class RiController {
  @operation({
    summary: "Get Ris",
  })
  @get()
  static getRis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ri",
  })
  @post("{id}")
  static createRi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
