import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inqs")
export default class InqController {
  @operation({
    summary: "Get Inqs",
  })
  @get()
  static getInqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inq",
  })
  @post("{id}")
  static createInq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
