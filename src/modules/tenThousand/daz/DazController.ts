import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dazs")
export default class DazController {
  @operation({
    summary: "Get Dazs",
  })
  @get()
  static getDazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Daz",
  })
  @post("{id}")
  static createDaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
