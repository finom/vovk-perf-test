import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avjs")
export default class AvjController {
  @operation({
    summary: "Get Avjs",
  })
  @get()
  static getAvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avj",
  })
  @post("{id}")
  static createAvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
