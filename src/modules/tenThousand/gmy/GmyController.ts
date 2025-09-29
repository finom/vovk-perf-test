import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmies")
export default class GmyController {
  @operation({
    summary: "Get Gmies",
  })
  @get()
  static getGmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmy",
  })
  @post("{id}")
  static createGmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
