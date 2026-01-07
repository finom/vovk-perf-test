import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwd")
export default class HwdController {
  @operation({
    summary: "Get Hwd",
  })
  @get()
  static getHwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwd",
  })
  @post("{id}")
  static createHwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
