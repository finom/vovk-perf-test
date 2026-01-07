import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbx")
export default class LbxController {
  @operation({
    summary: "Get Lbx",
  })
  @get()
  static getLbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbx",
  })
  @post("{id}")
  static createLbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
