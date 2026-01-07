import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzg")
export default class MzgController {
  @operation({
    summary: "Get Mzg",
  })
  @get()
  static getMzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzg",
  })
  @post("{id}")
  static createMzg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
