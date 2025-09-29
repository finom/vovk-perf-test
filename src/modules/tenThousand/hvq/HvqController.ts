import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvqs")
export default class HvqController {
  @operation({
    summary: "Get Hvqs",
  })
  @get()
  static getHvqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvq",
  })
  @post("{id}")
  static createHvq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
