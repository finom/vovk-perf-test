import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sh")
export default class ShController {
  @operation({
    summary: "Get Sh",
  })
  @get()
  static getSh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sh",
  })
  @post("{id}")
  static createSh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
