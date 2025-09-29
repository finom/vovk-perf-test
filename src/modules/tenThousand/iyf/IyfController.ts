import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyfs")
export default class IyfController {
  @operation({
    summary: "Get Iyfs",
  })
  @get()
  static getIyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyf",
  })
  @post("{id}")
  static createIyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
