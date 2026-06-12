import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtk")
export default class GtkController {
  @operation({
    summary: "Get Gtk",
  })
  @get()
  static getGtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gtk",
  })
  @post("{id}")
  static createGtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
