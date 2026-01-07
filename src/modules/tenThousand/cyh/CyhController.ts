import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyh")
export default class CyhController {
  @operation({
    summary: "Get Cyh",
  })
  @get()
  static getCyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyh",
  })
  @post("{id}")
  static createCyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
