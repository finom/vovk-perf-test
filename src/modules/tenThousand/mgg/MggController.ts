import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mggs")
export default class MggController {
  @operation({
    summary: "Get Mggs",
  })
  @get()
  static getMggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgg",
  })
  @post("{id}")
  static createMgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
