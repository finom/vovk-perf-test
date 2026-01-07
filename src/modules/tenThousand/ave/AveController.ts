import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ave")
export default class AveController {
  @operation({
    summary: "Get Ave",
  })
  @get()
  static getAve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ave",
  })
  @post("{id}")
  static createAve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
