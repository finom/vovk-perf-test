import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lky")
export default class LkyController {
  @operation({
    summary: "Get Lky",
  })
  @get()
  static getLky = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lky",
  })
  @post("{id}")
  static createLky = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
