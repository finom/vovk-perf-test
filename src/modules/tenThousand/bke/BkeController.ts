import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkes")
export default class BkeController {
  @operation({
    summary: "Get Bkes",
  })
  @get()
  static getBkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bke",
  })
  @post("{id}")
  static createBke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
