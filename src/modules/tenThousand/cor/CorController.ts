import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cor")
export default class CorController {
  @operation({
    summary: "Get Cor",
  })
  @get()
  static getCor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cor",
  })
  @post("{id}")
  static createCor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
