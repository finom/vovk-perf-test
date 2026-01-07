import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjx")
export default class MjxController {
  @operation({
    summary: "Get Mjx",
  })
  @get()
  static getMjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjx",
  })
  @post("{id}")
  static createMjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
