import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgq")
export default class HgqController {
  @operation({
    summary: "Get Hgq",
  })
  @get()
  static getHgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgq",
  })
  @post("{id}")
  static createHgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
