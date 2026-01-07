import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlj")
export default class MljController {
  @operation({
    summary: "Get Mlj",
  })
  @get()
  static getMlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlj",
  })
  @post("{id}")
  static createMlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
