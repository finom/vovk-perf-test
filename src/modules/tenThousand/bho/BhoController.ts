import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bhos")
export default class BhoController {
  @operation({
    summary: "Get Bhos",
  })
  @get()
  static getBhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bho",
  })
  @post("{id}")
  static createBho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
