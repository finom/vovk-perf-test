import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdhs")
export default class FdhController {
  @operation({
    summary: "Get Fdhs",
  })
  @get()
  static getFdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdh",
  })
  @post("{id}")
  static createFdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
