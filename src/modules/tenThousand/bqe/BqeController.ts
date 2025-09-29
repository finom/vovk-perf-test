import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqes")
export default class BqeController {
  @operation({
    summary: "Get Bqes",
  })
  @get()
  static getBqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqe",
  })
  @post("{id}")
  static createBqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
