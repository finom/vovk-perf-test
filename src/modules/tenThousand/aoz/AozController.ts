import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aozs")
export default class AozController {
  @operation({
    summary: "Get Aozs",
  })
  @get()
  static getAozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoz",
  })
  @post("{id}")
  static createAoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
