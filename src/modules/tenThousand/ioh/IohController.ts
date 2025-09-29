import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iohs")
export default class IohController {
  @operation({
    summary: "Get Iohs",
  })
  @get()
  static getIohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioh",
  })
  @post("{id}")
  static createIoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
