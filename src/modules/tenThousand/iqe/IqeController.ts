import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqes")
export default class IqeController {
  @operation({
    summary: "Get Iqes",
  })
  @get()
  static getIqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqe",
  })
  @post("{id}")
  static createIqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
