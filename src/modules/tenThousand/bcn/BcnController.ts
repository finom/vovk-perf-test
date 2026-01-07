import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcn")
export default class BcnController {
  @operation({
    summary: "Get Bcn",
  })
  @get()
  static getBcn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcn",
  })
  @post("{id}")
  static createBcn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
