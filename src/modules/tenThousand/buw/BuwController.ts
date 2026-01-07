import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buw")
export default class BuwController {
  @operation({
    summary: "Get Buw",
  })
  @get()
  static getBuw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buw",
  })
  @post("{id}")
  static createBuw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
