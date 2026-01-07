import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfs")
export default class MfsController {
  @operation({
    summary: "Get Mfs",
  })
  @get()
  static getMfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfs",
  })
  @post("{id}")
  static createMfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
