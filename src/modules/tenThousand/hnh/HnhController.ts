import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnhs")
export default class HnhController {
  @operation({
    summary: "Get Hnhs",
  })
  @get()
  static getHnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnh",
  })
  @post("{id}")
  static createHnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
