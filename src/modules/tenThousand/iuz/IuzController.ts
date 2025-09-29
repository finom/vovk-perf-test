import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuzs")
export default class IuzController {
  @operation({
    summary: "Get Iuzs",
  })
  @get()
  static getIuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuz",
  })
  @post("{id}")
  static createIuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
