import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjy")
export default class MjyController {
  @operation({
    summary: "Get Mjy",
  })
  @get()
  static getMjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjy",
  })
  @post("{id}")
  static createMjy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
