import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwfs")
export default class LwfController {
  @operation({
    summary: "Get Lwfs",
  })
  @get()
  static getLwfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwf",
  })
  @post("{id}")
  static createLwf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
