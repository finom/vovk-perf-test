import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsb")
export default class FsbController {
  @operation({
    summary: "Get Fsb",
  })
  @get()
  static getFsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsb",
  })
  @post("{id}")
  static createFsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
