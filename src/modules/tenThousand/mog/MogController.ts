import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mogs")
export default class MogController {
  @operation({
    summary: "Get Mogs",
  })
  @get()
  static getMogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mog",
  })
  @post("{id}")
  static createMog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
