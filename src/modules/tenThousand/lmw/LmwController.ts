import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmw")
export default class LmwController {
  @operation({
    summary: "Get Lmw",
  })
  @get()
  static getLmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmw",
  })
  @post("{id}")
  static createLmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
