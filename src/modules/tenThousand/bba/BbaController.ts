import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bba")
export default class BbaController {
  @operation({
    summary: "Get Bba",
  })
  @get()
  static getBba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bba",
  })
  @post("{id}")
  static createBba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
