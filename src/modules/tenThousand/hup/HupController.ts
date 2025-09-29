import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hups")
export default class HupController {
  @operation({
    summary: "Get Hups",
  })
  @get()
  static getHups = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hup",
  })
  @post("{id}")
  static createHup = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
