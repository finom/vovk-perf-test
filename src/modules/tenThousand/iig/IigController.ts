import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iigs")
export default class IigController {
  @operation({
    summary: "Get Iigs",
  })
  @get()
  static getIigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iig",
  })
  @post("{id}")
  static createIig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
