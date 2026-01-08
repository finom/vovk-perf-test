import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdk")
export default class GdkController {
  @operation({
    summary: "Get Gdk",
  })
  @get()
  static getGdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdk",
  })
  @post("{id}")
  static createGdk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
