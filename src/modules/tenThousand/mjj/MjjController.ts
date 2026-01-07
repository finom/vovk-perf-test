import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjj")
export default class MjjController {
  @operation({
    summary: "Get Mjj",
  })
  @get()
  static getMjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjj",
  })
  @post("{id}")
  static createMjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
