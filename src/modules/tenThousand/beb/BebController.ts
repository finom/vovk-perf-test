import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beb")
export default class BebController {
  @operation({
    summary: "Get Beb",
  })
  @get()
  static getBeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beb",
  })
  @post("{id}")
  static createBeb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
