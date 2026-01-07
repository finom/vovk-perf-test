import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gio")
export default class GioController {
  @operation({
    summary: "Get Gio",
  })
  @get()
  static getGio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gio",
  })
  @post("{id}")
  static createGio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
