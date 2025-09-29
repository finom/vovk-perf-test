import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrks")
export default class HrkController {
  @operation({
    summary: "Get Hrks",
  })
  @get()
  static getHrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrk",
  })
  @post("{id}")
  static createHrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
