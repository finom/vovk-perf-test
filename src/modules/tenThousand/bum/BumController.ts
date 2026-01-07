import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bum")
export default class BumController {
  @operation({
    summary: "Get Bum",
  })
  @get()
  static getBum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bum",
  })
  @post("{id}")
  static createBum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
