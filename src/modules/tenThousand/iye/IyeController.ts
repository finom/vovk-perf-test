import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyes")
export default class IyeController {
  @operation({
    summary: "Get Iyes",
  })
  @get()
  static getIyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iye",
  })
  @post("{id}")
  static createIye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
