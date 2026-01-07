import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkk")
export default class NkkController {
  @operation({
    summary: "Get Nkk",
  })
  @get()
  static getNkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkk",
  })
  @post("{id}")
  static createNkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
