import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idds")
export default class IddController {
  @operation({
    summary: "Get Idds",
  })
  @get()
  static getIdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idd",
  })
  @post("{id}")
  static createIdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
