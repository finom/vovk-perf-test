import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gefs")
export default class GefController {
  @operation({
    summary: "Get Gefs",
  })
  @get()
  static getGefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gef",
  })
  @post("{id}")
  static createGef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
