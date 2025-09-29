import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbfs")
export default class HbfController {
  @operation({
    summary: "Get Hbfs",
  })
  @get()
  static getHbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbf",
  })
  @post("{id}")
  static createHbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
