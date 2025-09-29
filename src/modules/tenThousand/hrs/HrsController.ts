import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrs")
export default class HrsController {
  @operation({
    summary: "Get Hrs",
  })
  @get()
  static getHrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hrs",
  })
  @post("{id}")
  static createHrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
