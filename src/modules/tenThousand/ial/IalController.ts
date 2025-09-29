import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ials")
export default class IalController {
  @operation({
    summary: "Get Ials",
  })
  @get()
  static getIals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ial",
  })
  @post("{id}")
  static createIal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
