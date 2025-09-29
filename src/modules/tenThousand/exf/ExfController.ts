import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exfs")
export default class ExfController {
  @operation({
    summary: "Get Exfs",
  })
  @get()
  static getExfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exf",
  })
  @post("{id}")
  static createExf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
