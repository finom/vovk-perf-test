import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlf")
export default class MlfController {
  @operation({
    summary: "Get Mlf",
  })
  @get()
  static getMlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlf",
  })
  @post("{id}")
  static createMlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
