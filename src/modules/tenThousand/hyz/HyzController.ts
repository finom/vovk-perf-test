import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyzs")
export default class HyzController {
  @operation({
    summary: "Get Hyzs",
  })
  @get()
  static getHyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyz",
  })
  @post("{id}")
  static createHyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
