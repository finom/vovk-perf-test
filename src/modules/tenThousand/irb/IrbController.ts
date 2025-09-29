import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irbs")
export default class IrbController {
  @operation({
    summary: "Get Irbs",
  })
  @get()
  static getIrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irb",
  })
  @post("{id}")
  static createIrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
