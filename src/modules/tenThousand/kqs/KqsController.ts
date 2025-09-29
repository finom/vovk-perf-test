import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqs")
export default class KqsController {
  @operation({
    summary: "Get Kqs",
  })
  @get()
  static getKqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqs",
  })
  @post("{id}")
  static createKqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
