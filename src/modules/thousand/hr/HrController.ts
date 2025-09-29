import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hrs")
export default class HrController {
  @operation({
    summary: "Get Hrs",
  })
  @get()
  static getHrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hr",
  })
  @post("{id}")
  static createHr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
