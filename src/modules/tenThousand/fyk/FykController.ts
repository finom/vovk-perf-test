import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyks")
export default class FykController {
  @operation({
    summary: "Get Fyks",
  })
  @get()
  static getFyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyk",
  })
  @post("{id}")
  static createFyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
