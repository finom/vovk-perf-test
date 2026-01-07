import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqf")
export default class BqfController {
  @operation({
    summary: "Get Bqf",
  })
  @get()
  static getBqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqf",
  })
  @post("{id}")
  static createBqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
