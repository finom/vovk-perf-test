import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmr")
export default class LmrController {
  @operation({
    summary: "Get Lmr",
  })
  @get()
  static getLmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmr",
  })
  @post("{id}")
  static createLmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
