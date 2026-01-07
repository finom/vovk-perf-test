import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mch")
export default class MchController {
  @operation({
    summary: "Get Mch",
  })
  @get()
  static getMch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mch",
  })
  @post("{id}")
  static createMch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
