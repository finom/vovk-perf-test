import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apr")
export default class AprController {
  @operation({
    summary: "Get Apr",
  })
  @get()
  static getApr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apr",
  })
  @post("{id}")
  static createApr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
