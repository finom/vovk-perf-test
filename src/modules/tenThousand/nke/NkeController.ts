import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkes")
export default class NkeController {
  @operation({
    summary: "Get Nkes",
  })
  @get()
  static getNkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nke",
  })
  @post("{id}")
  static createNke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
