import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mju")
export default class MjuController {
  @operation({
    summary: "Get Mju",
  })
  @get()
  static getMju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mju",
  })
  @post("{id}")
  static createMju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
