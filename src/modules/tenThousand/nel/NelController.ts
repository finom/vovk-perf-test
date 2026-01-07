import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nel")
export default class NelController {
  @operation({
    summary: "Get Nel",
  })
  @get()
  static getNel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nel",
  })
  @post("{id}")
  static createNel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
