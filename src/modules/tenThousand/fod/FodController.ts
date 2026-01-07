import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fod")
export default class FodController {
  @operation({
    summary: "Get Fod",
  })
  @get()
  static getFod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fod",
  })
  @post("{id}")
  static createFod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
