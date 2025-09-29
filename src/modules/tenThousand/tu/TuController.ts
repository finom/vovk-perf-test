import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tus")
export default class TuController {
  @operation({
    summary: "Get Tus",
  })
  @get()
  static getTus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tu",
  })
  @post("{id}")
  static createTu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
