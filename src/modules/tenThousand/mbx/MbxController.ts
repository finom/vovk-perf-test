import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbx")
export default class MbxController {
  @operation({
    summary: "Get Mbx",
  })
  @get()
  static getMbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbx",
  })
  @post("{id}")
  static createMbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
