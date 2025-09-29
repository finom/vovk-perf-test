import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyqs")
export default class IyqController {
  @operation({
    summary: "Get Iyqs",
  })
  @get()
  static getIyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyq",
  })
  @post("{id}")
  static createIyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
