import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtks")
export default class GtkController {
  @operation({
    summary: "Get Gtks",
  })
  @get()
  static getGtks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtk",
  })
  @post("{id}")
  static createGtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
