import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfl")
export default class JflController {
  @operation({
    summary: "Get Jfl",
  })
  @get()
  static getJfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfl",
  })
  @post("{id}")
  static createJfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
