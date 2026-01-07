import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sm")
export default class SmController {
  @operation({
    summary: "Get Sm",
  })
  @get()
  static getSm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Sm",
  })
  @post("{id}")
  static createSm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
