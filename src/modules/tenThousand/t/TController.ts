import { procedure, prefix, get, post, operation } from "vovk";

@prefix("t")
export default class TController {
  @operation({
    summary: "Get T",
  })
  @get()
  static getT = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create T",
  })
  @post("{id}")
  static createT = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
