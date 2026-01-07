import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nih")
export default class NihController {
  @operation({
    summary: "Get Nih",
  })
  @get()
  static getNih = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nih",
  })
  @post("{id}")
  static createNih = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
