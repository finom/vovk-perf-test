import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxx")
export default class MxxController {
  @operation({
    summary: "Get Mxx",
  })
  @get()
  static getMxx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxx",
  })
  @post("{id}")
  static createMxx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
