import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnq")
export default class BnqController {
  @operation({
    summary: "Get Bnq",
  })
  @get()
  static getBnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnq",
  })
  @post("{id}")
  static createBnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
