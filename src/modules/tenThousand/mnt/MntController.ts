import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnt")
export default class MntController {
  @operation({
    summary: "Get Mnt",
  })
  @get()
  static getMnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnt",
  })
  @post("{id}")
  static createMnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
