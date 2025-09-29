import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byys")
export default class ByyController {
  @operation({
    summary: "Get Byys",
  })
  @get()
  static getByys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byy",
  })
  @post("{id}")
  static createByy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
