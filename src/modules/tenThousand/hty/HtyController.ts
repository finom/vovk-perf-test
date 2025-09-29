import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hties")
export default class HtyController {
  @operation({
    summary: "Get Hties",
  })
  @get()
  static getHties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hty",
  })
  @post("{id}")
  static createHty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
