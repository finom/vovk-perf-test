import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewies")
export default class EwyController {
  @operation({
    summary: "Get Ewies",
  })
  @get()
  static getEwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewy",
  })
  @post("{id}")
  static createEwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
