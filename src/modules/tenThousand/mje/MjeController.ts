import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mje")
export default class MjeController {
  @operation({
    summary: "Get Mje",
  })
  @get()
  static getMje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mje",
  })
  @post("{id}")
  static createMje = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
