import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtk")
export default class GtkController {
  @operation({
    summary: "Get Gtk",
  })
  @get()
  static getGtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtk",
  })
  @post("{id}")
  static createGtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
