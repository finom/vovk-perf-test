import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjz")
export default class MjzController {
  @operation({
    summary: "Get Mjz",
  })
  @get()
  static getMjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjz",
  })
  @post("{id}")
  static createMjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
