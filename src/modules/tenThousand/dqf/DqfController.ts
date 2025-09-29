import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqfs")
export default class DqfController {
  @operation({
    summary: "Get Dqfs",
  })
  @get()
  static getDqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqf",
  })
  @post("{id}")
  static createDqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
