import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iejs")
export default class IejController {
  @operation({
    summary: "Get Iejs",
  })
  @get()
  static getIejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iej",
  })
  @post("{id}")
  static createIej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
