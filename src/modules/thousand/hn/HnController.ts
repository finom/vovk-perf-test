import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hn")
export default class HnController {
  @operation({
    summary: "Get Hn",
  })
  @get()
  static getHn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hn",
  })
  @post("{id}")
  static createHn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
