import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diz")
export default class DizController {
  @operation({
    summary: "Get Diz",
  })
  @get()
  static getDiz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diz",
  })
  @post("{id}")
  static createDiz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
