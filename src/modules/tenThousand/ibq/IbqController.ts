import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibqs")
export default class IbqController {
  @operation({
    summary: "Get Ibqs",
  })
  @get()
  static getIbqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibq",
  })
  @post("{id}")
  static createIbq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
