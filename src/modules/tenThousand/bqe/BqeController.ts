import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqe")
export default class BqeController {
  @operation({
    summary: "Get Bqe",
  })
  @get()
  static getBqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqe",
  })
  @post("{id}")
  static createBqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
