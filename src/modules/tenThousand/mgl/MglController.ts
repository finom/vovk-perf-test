import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgl")
export default class MglController {
  @operation({
    summary: "Get Mgl",
  })
  @get()
  static getMgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgl",
  })
  @post("{id}")
  static createMgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
