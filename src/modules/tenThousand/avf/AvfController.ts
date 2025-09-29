import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avfs")
export default class AvfController {
  @operation({
    summary: "Get Avfs",
  })
  @get()
  static getAvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avf",
  })
  @post("{id}")
  static createAvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
