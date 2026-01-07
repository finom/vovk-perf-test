import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alh")
export default class AlhController {
  @operation({
    summary: "Get Alh",
  })
  @get()
  static getAlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alh",
  })
  @post("{id}")
  static createAlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
