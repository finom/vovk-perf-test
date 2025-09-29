import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjfs")
export default class GjfController {
  @operation({
    summary: "Get Gjfs",
  })
  @get()
  static getGjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjf",
  })
  @post("{id}")
  static createGjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
