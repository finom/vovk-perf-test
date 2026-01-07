import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtq")
export default class MtqController {
  @operation({
    summary: "Get Mtq",
  })
  @get()
  static getMtq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mtq",
  })
  @post("{id}")
  static createMtq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
