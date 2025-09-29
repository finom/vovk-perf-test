import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnfs")
export default class HnfController {
  @operation({
    summary: "Get Hnfs",
  })
  @get()
  static getHnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnf",
  })
  @post("{id}")
  static createHnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
