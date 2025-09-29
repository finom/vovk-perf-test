import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ios")
export default class IoController {
  @operation({
    summary: "Get Ios",
  })
  @get()
  static getIos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Io",
  })
  @post("{id}")
  static createIo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
