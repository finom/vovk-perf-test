import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efs")
export default class EfController {
  @operation({
    summary: "Get Efs",
  })
  @get()
  static getEfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ef",
  })
  @post("{id}")
  static createEf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
