import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mjf")
export default class MjfController {
  @operation({
    summary: "Get Mjf",
  })
  @get()
  static getMjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjf",
  })
  @post("{id}")
  static createMjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
