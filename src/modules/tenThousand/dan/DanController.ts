import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dans")
export default class DanController {
  @operation({
    summary: "Get Dans",
  })
  @get()
  static getDans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dan",
  })
  @post("{id}")
  static createDan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
