import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iks")
export default class IkController {
  @operation({
    summary: "Get Iks",
  })
  @get()
  static getIks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ik",
  })
  @post("{id}")
  static createIk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
