import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqfs")
export default class CqfController {
  @operation({
    summary: "Get Cqfs",
  })
  @get()
  static getCqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqf",
  })
  @post("{id}")
  static createCqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
