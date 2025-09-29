import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdus")
export default class FduController {
  @operation({
    summary: "Get Fdus",
  })
  @get()
  static getFdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdu",
  })
  @post("{id}")
  static createFdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
