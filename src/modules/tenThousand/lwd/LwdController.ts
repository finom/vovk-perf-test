import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwd")
export default class LwdController {
  @operation({
    summary: "Get Lwd",
  })
  @get()
  static getLwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwd",
  })
  @post("{id}")
  static createLwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
