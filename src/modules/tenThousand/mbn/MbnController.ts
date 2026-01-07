import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbn")
export default class MbnController {
  @operation({
    summary: "Get Mbn",
  })
  @get()
  static getMbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbn",
  })
  @post("{id}")
  static createMbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
