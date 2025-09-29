import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyfs")
export default class HyfController {
  @operation({
    summary: "Get Hyfs",
  })
  @get()
  static getHyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyf",
  })
  @post("{id}")
  static createHyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
