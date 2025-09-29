import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gazs")
export default class GazController {
  @operation({
    summary: "Get Gazs",
  })
  @get()
  static getGazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gaz",
  })
  @post("{id}")
  static createGaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
