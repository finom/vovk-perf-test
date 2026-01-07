import { procedure, prefix, get, post, operation } from "vovk";

@prefix("po")
export default class PoController {
  @operation({
    summary: "Get Po",
  })
  @get()
  static getPo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Po",
  })
  @post("{id}")
  static createPo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
