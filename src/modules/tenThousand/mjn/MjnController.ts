import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjns")
export default class MjnController {
  @operation({
    summary: "Get Mjns",
  })
  @get()
  static getMjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mjn",
  })
  @post("{id}")
  static createMjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
