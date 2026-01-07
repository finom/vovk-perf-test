import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtk")
export default class GtkController {
  @operation({
    summary: "Get Gtk",
  })
  @get()
  static getGtk = procedure({
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
