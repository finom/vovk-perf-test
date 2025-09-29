import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrcs")
export default class HrcController {
  @operation({
    summary: "Get Hrcs",
  })
  @get()
  static getHrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrc",
  })
  @post("{id}")
  static createHrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
