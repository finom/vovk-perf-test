import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnw")
export default class BnwController {
  @operation({
    summary: "Get Bnw",
  })
  @get()
  static getBnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnw",
  })
  @post("{id}")
  static createBnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
