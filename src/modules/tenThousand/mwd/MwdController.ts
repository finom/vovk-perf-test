import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwd")
export default class MwdController {
  @operation({
    summary: "Get Mwd",
  })
  @get()
  static getMwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwd",
  })
  @post("{id}")
  static createMwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
