import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjw")
export default class MjwController {
  @operation({
    summary: "Get Mjw",
  })
  @get()
  static getMjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjw",
  })
  @post("{id}")
  static createMjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
