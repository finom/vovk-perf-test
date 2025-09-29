import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("does")
export default class DoeController {
  @operation({
    summary: "Get Does",
  })
  @get()
  static getDoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Doe",
  })
  @post("{id}")
  static createDoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
