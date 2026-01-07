import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgu")
export default class BguController {
  @operation({
    summary: "Get Bgu",
  })
  @get()
  static getBgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgu",
  })
  @post("{id}")
  static createBgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
