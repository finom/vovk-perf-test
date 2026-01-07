import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzu")
export default class BzuController {
  @operation({
    summary: "Get Bzu",
  })
  @get()
  static getBzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzu",
  })
  @post("{id}")
  static createBzu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
