import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bries")
export default class BryController {
  @operation({
    summary: "Get Bries",
  })
  @get()
  static getBries = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bry",
  })
  @post("{id}")
  static createBry = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
