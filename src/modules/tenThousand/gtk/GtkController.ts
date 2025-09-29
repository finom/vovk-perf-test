import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtks")
export default class GtkController {
  @operation({
    summary: "Get Gtks",
  })
  @get()
  static getGtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtk",
  })
  @post("{id}")
  static createGtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
