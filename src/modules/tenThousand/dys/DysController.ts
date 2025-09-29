import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dys")
export default class DysController {
  @operation({
    summary: "Get Dys",
  })
  @get()
  static getDys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dys",
  })
  @post("{id}")
  static createDys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
