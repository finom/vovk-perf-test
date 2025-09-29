import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asjs")
export default class AsjController {
  @operation({
    summary: "Get Asjs",
  })
  @get()
  static getAsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asj",
  })
  @post("{id}")
  static createAsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
