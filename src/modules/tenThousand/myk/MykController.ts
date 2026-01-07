import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myk")
export default class MykController {
  @operation({
    summary: "Get Myk",
  })
  @get()
  static getMyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myk",
  })
  @post("{id}")
  static createMyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
