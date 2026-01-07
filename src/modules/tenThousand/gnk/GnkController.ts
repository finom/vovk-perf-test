import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnk")
export default class GnkController {
  @operation({
    summary: "Get Gnk",
  })
  @get()
  static getGnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnk",
  })
  @post("{id}")
  static createGnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
