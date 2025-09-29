import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwds")
export default class IwdController {
  @operation({
    summary: "Get Iwds",
  })
  @get()
  static getIwds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwd",
  })
  @post("{id}")
  static createIwd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
