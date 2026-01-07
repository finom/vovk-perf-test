import { procedure, prefix, get, post, operation } from "vovk";

@prefix("z")
export default class ZController {
  @operation({
    summary: "Get Z",
  })
  @get()
  static getZ = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Z",
  })
  @post("{id}")
  static createZ = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
