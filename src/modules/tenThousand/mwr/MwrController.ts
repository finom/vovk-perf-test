import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwrs")
export default class MwrController {
  @operation({
    summary: "Get Mwrs",
  })
  @get()
  static getMwrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwr",
  })
  @post("{id}")
  static createMwr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
