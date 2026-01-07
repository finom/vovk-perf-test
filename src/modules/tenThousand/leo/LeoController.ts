import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leo")
export default class LeoController {
  @operation({
    summary: "Get Leo",
  })
  @get()
  static getLeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Leo",
  })
  @post("{id}")
  static createLeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
