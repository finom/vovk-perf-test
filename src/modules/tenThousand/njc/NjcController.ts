import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njcs")
export default class NjcController {
  @operation({
    summary: "Get Njcs",
  })
  @get()
  static getNjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njc",
  })
  @post("{id}")
  static createNjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
