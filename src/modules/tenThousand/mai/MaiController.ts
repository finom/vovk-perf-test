import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mai")
export default class MaiController {
  @operation({
    summary: "Get Mai",
  })
  @get()
  static getMai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mai",
  })
  @post("{id}")
  static createMai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
