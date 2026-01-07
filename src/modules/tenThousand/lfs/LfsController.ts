import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfs")
export default class LfsController {
  @operation({
    summary: "Get Lfs",
  })
  @get()
  static getLfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfs",
  })
  @post("{id}")
  static createLfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
