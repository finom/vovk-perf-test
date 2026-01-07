import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnc")
export default class MncController {
  @operation({
    summary: "Get Mnc",
  })
  @get()
  static getMnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnc",
  })
  @post("{id}")
  static createMnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
