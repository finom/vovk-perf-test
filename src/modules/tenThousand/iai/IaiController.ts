import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iais")
export default class IaiController {
  @operation({
    summary: "Get Iais",
  })
  @get()
  static getIais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iai",
  })
  @post("{id}")
  static createIai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
