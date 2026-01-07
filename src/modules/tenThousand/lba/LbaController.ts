import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lba")
export default class LbaController {
  @operation({
    summary: "Get Lba",
  })
  @get()
  static getLba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lba",
  })
  @post("{id}")
  static createLba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
