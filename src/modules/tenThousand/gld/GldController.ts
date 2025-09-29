import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glds")
export default class GldController {
  @operation({
    summary: "Get Glds",
  })
  @get()
  static getGlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gld",
  })
  @post("{id}")
  static createGld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
