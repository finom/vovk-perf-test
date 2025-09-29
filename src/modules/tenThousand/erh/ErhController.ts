import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erhs")
export default class ErhController {
  @operation({
    summary: "Get Erhs",
  })
  @get()
  static getErhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erh",
  })
  @post("{id}")
  static createErh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
