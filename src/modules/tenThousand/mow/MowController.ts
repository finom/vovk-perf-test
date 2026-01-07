import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mow")
export default class MowController {
  @operation({
    summary: "Get Mow",
  })
  @get()
  static getMow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mow",
  })
  @post("{id}")
  static createMow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
