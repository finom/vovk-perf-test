import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrb")
export default class MrbController {
  @operation({
    summary: "Get Mrb",
  })
  @get()
  static getMrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrb",
  })
  @post("{id}")
  static createMrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
