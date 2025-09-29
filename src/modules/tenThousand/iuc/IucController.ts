import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iucs")
export default class IucController {
  @operation({
    summary: "Get Iucs",
  })
  @get()
  static getIucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuc",
  })
  @post("{id}")
  static createIuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
