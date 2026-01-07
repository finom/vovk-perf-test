import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgx")
export default class BgxController {
  @operation({
    summary: "Get Bgx",
  })
  @get()
  static getBgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgx",
  })
  @post("{id}")
  static createBgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
