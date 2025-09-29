import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahts")
export default class AhtController {
  @operation({
    summary: "Get Ahts",
  })
  @get()
  static getAhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aht",
  })
  @post("{id}")
  static createAht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
