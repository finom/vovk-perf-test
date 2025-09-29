import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byfs")
export default class ByfController {
  @operation({
    summary: "Get Byfs",
  })
  @get()
  static getByfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byf",
  })
  @post("{id}")
  static createByf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
