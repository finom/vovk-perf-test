import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dby")
export default class DbyController {
  @operation({
    summary: "Get Dby",
  })
  @get()
  static getDby = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dby",
  })
  @post("{id}")
  static createDby = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
