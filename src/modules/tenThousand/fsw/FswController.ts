import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsw")
export default class FswController {
  @operation({
    summary: "Get Fsw",
  })
  @get()
  static getFsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsw",
  })
  @post("{id}")
  static createFsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
