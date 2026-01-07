import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcj")
export default class FcjController {
  @operation({
    summary: "Get Fcj",
  })
  @get()
  static getFcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcj",
  })
  @post("{id}")
  static createFcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
