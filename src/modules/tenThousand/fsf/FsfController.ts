import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsf")
export default class FsfController {
  @operation({
    summary: "Get Fsf",
  })
  @get()
  static getFsf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsf",
  })
  @post("{id}")
  static createFsf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
