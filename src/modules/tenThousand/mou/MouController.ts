import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mou")
export default class MouController {
  @operation({
    summary: "Get Mou",
  })
  @get()
  static getMou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mou",
  })
  @post("{id}")
  static createMou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
