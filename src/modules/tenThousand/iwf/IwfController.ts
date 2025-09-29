import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwfs")
export default class IwfController {
  @operation({
    summary: "Get Iwfs",
  })
  @get()
  static getIwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwf",
  })
  @post("{id}")
  static createIwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
