import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvm")
export default class LvmController {
  @operation({
    summary: "Get Lvm",
  })
  @get()
  static getLvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvm",
  })
  @post("{id}")
  static createLvm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
