import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lries")
export default class LryController {
  @operation({
    summary: "Get Lries",
  })
  @get()
  static getLries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lry",
  })
  @post("{id}")
  static createLry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
