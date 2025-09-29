import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bghs")
export default class BghController {
  @operation({
    summary: "Get Bghs",
  })
  @get()
  static getBghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgh",
  })
  @post("{id}")
  static createBgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
