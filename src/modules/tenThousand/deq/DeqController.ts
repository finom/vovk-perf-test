import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deqs")
export default class DeqController {
  @operation({
    summary: "Get Deqs",
  })
  @get()
  static getDeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Deq",
  })
  @post("{id}")
  static createDeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
