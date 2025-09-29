import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iobs")
export default class IobController {
  @operation({
    summary: "Get Iobs",
  })
  @get()
  static getIobs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iob",
  })
  @post("{id}")
  static createIob = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
