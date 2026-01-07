import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwd")
export default class FwdController {
  @operation({
    summary: "Get Fwd",
  })
  @get()
  static getFwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwd",
  })
  @post("{id}")
  static createFwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
