import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("days")
export default class DayController {
  @operation({
    summary: "Get Days",
  })
  @get()
  static getDays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Day",
  })
  @post("{id}")
  static createDay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
