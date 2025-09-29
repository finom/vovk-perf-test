import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewcs")
export default class EwcController {
  @operation({
    summary: "Get Ewcs",
  })
  @get()
  static getEwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewc",
  })
  @post("{id}")
  static createEwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
