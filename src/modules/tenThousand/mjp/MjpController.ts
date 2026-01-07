import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjp")
export default class MjpController {
  @operation({
    summary: "Get Mjp",
  })
  @get()
  static getMjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjp",
  })
  @post("{id}")
  static createMjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
