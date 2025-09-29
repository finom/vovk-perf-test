import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dins")
export default class DinController {
  @operation({
    summary: "Get Dins",
  })
  @get()
  static getDins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Din",
  })
  @post("{id}")
  static createDin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
