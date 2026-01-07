import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ers")
export default class ErsController {
  @operation({
    summary: "Get Ers",
  })
  @get()
  static getErs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ers",
  })
  @post("{id}")
  static createErs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
