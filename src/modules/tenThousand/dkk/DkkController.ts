import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkk")
export default class DkkController {
  @operation({
    summary: "Get Dkk",
  })
  @get()
  static getDkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkk",
  })
  @post("{id}")
  static createDkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
