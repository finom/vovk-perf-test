import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biu")
export default class BiuController {
  @operation({
    summary: "Get Biu",
  })
  @get()
  static getBiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Biu",
  })
  @post("{id}")
  static createBiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
