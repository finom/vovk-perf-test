import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clcs")
export default class ClcController {
  @operation({
    summary: "Get Clcs",
  })
  @get()
  static getClcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clc",
  })
  @post("{id}")
  static createClc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
