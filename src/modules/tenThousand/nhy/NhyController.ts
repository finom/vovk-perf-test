import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhy")
export default class NhyController {
  @operation({
    summary: "Get Nhy",
  })
  @get()
  static getNhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nhy",
  })
  @post("{id}")
  static createNhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
