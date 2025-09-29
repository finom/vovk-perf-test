import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqfs")
export default class HqfController {
  @operation({
    summary: "Get Hqfs",
  })
  @get()
  static getHqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqf",
  })
  @post("{id}")
  static createHqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
