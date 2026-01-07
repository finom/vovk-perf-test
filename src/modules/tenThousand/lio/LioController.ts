import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lio")
export default class LioController {
  @operation({
    summary: "Get Lio",
  })
  @get()
  static getLio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lio",
  })
  @post("{id}")
  static createLio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
