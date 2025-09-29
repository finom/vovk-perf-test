import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igzs")
export default class IgzController {
  @operation({
    summary: "Get Igzs",
  })
  @get()
  static getIgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igz",
  })
  @post("{id}")
  static createIgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
