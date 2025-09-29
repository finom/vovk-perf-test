import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axts")
export default class AxtController {
  @operation({
    summary: "Get Axts",
  })
  @get()
  static getAxts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axt",
  })
  @post("{id}")
  static createAxt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
