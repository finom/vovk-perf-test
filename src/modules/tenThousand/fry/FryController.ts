import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fries")
export default class FryController {
  @operation({
    summary: "Get Fries",
  })
  @get()
  static getFries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fry",
  })
  @post("{id}")
  static createFry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
