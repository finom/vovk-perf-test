import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
