import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyrs")
export default class GyrController {
  @operation({
    summary: "Get Gyrs",
  })
  @get()
  static getGyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyr",
  })
  @post("{id}")
  static createGyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
