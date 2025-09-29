import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzvs")
export default class MzvController {
  @operation({
    summary: "Get Mzvs",
  })
  @get()
  static getMzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzv",
  })
  @post("{id}")
  static createMzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
