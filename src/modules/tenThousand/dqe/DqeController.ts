import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqes")
export default class DqeController {
  @operation({
    summary: "Get Dqes",
  })
  @get()
  static getDqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqe",
  })
  @post("{id}")
  static createDqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
