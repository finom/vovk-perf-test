import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byn")
export default class BynController {
  @operation({
    summary: "Get Byn",
  })
  @get()
  static getByn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byn",
  })
  @post("{id}")
  static createByn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
