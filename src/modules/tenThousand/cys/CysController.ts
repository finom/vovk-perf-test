import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cys")
export default class CysController {
  @operation({
    summary: "Get Cys",
  })
  @get()
  static getCys = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cys",
  })
  @post("{id}")
  static createCys = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
