import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buh")
export default class BuhController {
  @operation({
    summary: "Get Buh",
  })
  @get()
  static getBuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Buh",
  })
  @post("{id}")
  static createBuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
