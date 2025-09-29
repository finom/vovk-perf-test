import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifgs")
export default class IfgController {
  @operation({
    summary: "Get Ifgs",
  })
  @get()
  static getIfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifg",
  })
  @post("{id}")
  static createIfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
