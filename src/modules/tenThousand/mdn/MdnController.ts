import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdn")
export default class MdnController {
  @operation({
    summary: "Get Mdn",
  })
  @get()
  static getMdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdn",
  })
  @post("{id}")
  static createMdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
