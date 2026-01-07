import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnx")
export default class BnxController {
  @operation({
    summary: "Get Bnx",
  })
  @get()
  static getBnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnx",
  })
  @post("{id}")
  static createBnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
