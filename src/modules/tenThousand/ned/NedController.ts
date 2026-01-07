import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ned")
export default class NedController {
  @operation({
    summary: "Get Ned",
  })
  @get()
  static getNed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ned",
  })
  @post("{id}")
  static createNed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
