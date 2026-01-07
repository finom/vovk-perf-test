import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myt")
export default class MytController {
  @operation({
    summary: "Get Myt",
  })
  @get()
  static getMyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myt",
  })
  @post("{id}")
  static createMyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
