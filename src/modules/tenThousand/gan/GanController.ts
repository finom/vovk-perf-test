import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gans")
export default class GanController {
  @operation({
    summary: "Get Gans",
  })
  @get()
  static getGans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gan",
  })
  @post("{id}")
  static createGan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
