import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muj")
export default class MujController {
  @operation({
    summary: "Get Muj",
  })
  @get()
  static getMuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muj",
  })
  @post("{id}")
  static createMuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
