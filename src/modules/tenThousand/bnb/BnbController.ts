import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnb")
export default class BnbController {
  @operation({
    summary: "Get Bnb",
  })
  @get()
  static getBnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnb",
  })
  @post("{id}")
  static createBnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
