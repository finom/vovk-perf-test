import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myw")
export default class MywController {
  @operation({
    summary: "Get Myw",
  })
  @get()
  static getMyw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myw",
  })
  @post("{id}")
  static createMyw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
