import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdks")
export default class GdkController {
  @operation({
    summary: "Get Gdks",
  })
  @get()
  static getGdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdk",
  })
  @post("{id}")
  static createGdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
