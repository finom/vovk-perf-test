import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bno")
export default class BnoController {
  @operation({
    summary: "Get Bno",
  })
  @get()
  static getBno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bno",
  })
  @post("{id}")
  static createBno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
