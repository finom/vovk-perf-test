import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tk")
export default class TkController {
  @operation({
    summary: "Get Tk",
  })
  @get()
  static getTk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tk",
  })
  @post("{id}")
  static createTk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
