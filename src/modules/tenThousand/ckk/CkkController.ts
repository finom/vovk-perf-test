import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckk")
export default class CkkController {
  @operation({
    summary: "Get Ckk",
  })
  @get()
  static getCkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckk",
  })
  @post("{id}")
  static createCkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
