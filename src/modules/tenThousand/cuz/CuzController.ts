import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuzs")
export default class CuzController {
  @operation({
    summary: "Get Cuzs",
  })
  @get()
  static getCuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuz",
  })
  @post("{id}")
  static createCuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
