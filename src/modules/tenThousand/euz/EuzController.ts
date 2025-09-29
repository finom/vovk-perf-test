import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euzs")
export default class EuzController {
  @operation({
    summary: "Get Euzs",
  })
  @get()
  static getEuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euz",
  })
  @post("{id}")
  static createEuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
