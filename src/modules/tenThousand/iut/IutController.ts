import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuts")
export default class IutController {
  @operation({
    summary: "Get Iuts",
  })
  @get()
  static getIuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iut",
  })
  @post("{id}")
  static createIut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
