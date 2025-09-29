import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkes")
export default class GkeController {
  @operation({
    summary: "Get Gkes",
  })
  @get()
  static getGkes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gke",
  })
  @post("{id}")
  static createGke = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
