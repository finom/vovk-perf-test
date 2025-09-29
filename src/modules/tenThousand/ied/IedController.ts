import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieds")
export default class IedController {
  @operation({
    summary: "Get Ieds",
  })
  @get()
  static getIeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ied",
  })
  @post("{id}")
  static createIed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
