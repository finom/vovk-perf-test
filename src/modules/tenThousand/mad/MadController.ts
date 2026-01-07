import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mad")
export default class MadController {
  @operation({
    summary: "Get Mad",
  })
  @get()
  static getMad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mad",
  })
  @post("{id}")
  static createMad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
