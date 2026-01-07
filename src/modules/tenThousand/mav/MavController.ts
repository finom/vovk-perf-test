import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mav")
export default class MavController {
  @operation({
    summary: "Get Mav",
  })
  @get()
  static getMav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mav",
  })
  @post("{id}")
  static createMav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
