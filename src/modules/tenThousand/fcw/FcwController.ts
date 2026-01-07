import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcw")
export default class FcwController {
  @operation({
    summary: "Get Fcw",
  })
  @get()
  static getFcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcw",
  })
  @post("{id}")
  static createFcw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
