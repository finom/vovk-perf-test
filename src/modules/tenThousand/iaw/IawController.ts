import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaws")
export default class IawController {
  @operation({
    summary: "Get Iaws",
  })
  @get()
  static getIaws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iaw",
  })
  @post("{id}")
  static createIaw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
