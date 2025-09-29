import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqes")
export default class CqeController {
  @operation({
    summary: "Get Cqes",
  })
  @get()
  static getCqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqe",
  })
  @post("{id}")
  static createCqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
