import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irrs")
export default class IrrController {
  @operation({
    summary: "Get Irrs",
  })
  @get()
  static getIrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irr",
  })
  @post("{id}")
  static createIrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
