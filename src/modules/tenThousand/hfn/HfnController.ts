import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfn")
export default class HfnController {
  @operation({
    summary: "Get Hfn",
  })
  @get()
  static getHfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfn",
  })
  @post("{id}")
  static createHfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
