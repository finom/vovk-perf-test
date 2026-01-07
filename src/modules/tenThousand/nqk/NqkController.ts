import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqk")
export default class NqkController {
  @operation({
    summary: "Get Nqk",
  })
  @get()
  static getNqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqk",
  })
  @post("{id}")
  static createNqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
