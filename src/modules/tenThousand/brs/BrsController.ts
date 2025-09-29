import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brs")
export default class BrsController {
  @operation({
    summary: "Get Brs",
  })
  @get()
  static getBrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brs",
  })
  @post("{id}")
  static createBrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
