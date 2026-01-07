import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feb")
export default class FebController {
  @operation({
    summary: "Get Feb",
  })
  @get()
  static getFeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feb",
  })
  @post("{id}")
  static createFeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
