import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrqs")
export default class HrqController {
  @operation({
    summary: "Get Hrqs",
  })
  @get()
  static getHrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrq",
  })
  @post("{id}")
  static createHrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
