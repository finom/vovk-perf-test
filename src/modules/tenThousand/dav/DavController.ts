import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dav")
export default class DavController {
  @operation({
    summary: "Get Dav",
  })
  @get()
  static getDav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dav",
  })
  @post("{id}")
  static createDav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
