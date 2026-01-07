import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfe")
export default class BfeController {
  @operation({
    summary: "Get Bfe",
  })
  @get()
  static getBfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfe",
  })
  @post("{id}")
  static createBfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
