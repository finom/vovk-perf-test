import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnx")
export default class GnxController {
  @operation({
    summary: "Get Gnx",
  })
  @get()
  static getGnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gnx",
  })
  @post("{id}")
  static createGnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
