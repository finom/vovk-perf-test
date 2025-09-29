import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjhs")
export default class MjhController {
  @operation({
    summary: "Get Mjhs",
  })
  @get()
  static getMjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjh",
  })
  @post("{id}")
  static createMjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
