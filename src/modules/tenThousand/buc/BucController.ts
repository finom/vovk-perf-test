import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buc")
export default class BucController {
  @operation({
    summary: "Get Buc",
  })
  @get()
  static getBuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buc",
  })
  @post("{id}")
  static createBuc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
