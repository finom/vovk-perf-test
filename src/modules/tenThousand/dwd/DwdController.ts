import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwd")
export default class DwdController {
  @operation({
    summary: "Get Dwd",
  })
  @get()
  static getDwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwd",
  })
  @post("{id}")
  static createDwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
