import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enq")
export default class EnqController {
  @operation({
    summary: "Get Enq",
  })
  @get()
  static getEnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enq",
  })
  @post("{id}")
  static createEnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
