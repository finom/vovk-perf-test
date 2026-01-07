import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjg")
export default class MjgController {
  @operation({
    summary: "Get Mjg",
  })
  @get()
  static getMjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjg",
  })
  @post("{id}")
  static createMjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
