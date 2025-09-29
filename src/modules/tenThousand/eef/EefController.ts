import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eefs")
export default class EefController {
  @operation({
    summary: "Get Eefs",
  })
  @get()
  static getEefs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eef",
  })
  @post("{id}")
  static createEef = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
