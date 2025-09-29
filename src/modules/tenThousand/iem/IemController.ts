import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iems")
export default class IemController {
  @operation({
    summary: "Get Iems",
  })
  @get()
  static getIems = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iem",
  })
  @post("{id}")
  static createIem = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
