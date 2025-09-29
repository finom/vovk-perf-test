import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eljs")
export default class EljController {
  @operation({
    summary: "Get Eljs",
  })
  @get()
  static getEljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elj",
  })
  @post("{id}")
  static createElj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
