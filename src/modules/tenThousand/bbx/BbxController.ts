import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbx")
export default class BbxController {
  @operation({
    summary: "Get Bbx",
  })
  @get()
  static getBbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bbx",
  })
  @post("{id}")
  static createBbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
