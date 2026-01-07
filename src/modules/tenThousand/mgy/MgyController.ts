import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgy")
export default class MgyController {
  @operation({
    summary: "Get Mgy",
  })
  @get()
  static getMgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgy",
  })
  @post("{id}")
  static createMgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
