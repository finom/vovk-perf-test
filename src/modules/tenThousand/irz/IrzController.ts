import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irzs")
export default class IrzController {
  @operation({
    summary: "Get Irzs",
  })
  @get()
  static getIrzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irz",
  })
  @post("{id}")
  static createIrz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
