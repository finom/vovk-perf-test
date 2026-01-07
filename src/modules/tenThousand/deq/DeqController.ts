import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deq")
export default class DeqController {
  @operation({
    summary: "Get Deq",
  })
  @get()
  static getDeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deq",
  })
  @post("{id}")
  static createDeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
