import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fizs")
export default class FizController {
  @operation({
    summary: "Get Fizs",
  })
  @get()
  static getFizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fiz",
  })
  @post("{id}")
  static createFiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
