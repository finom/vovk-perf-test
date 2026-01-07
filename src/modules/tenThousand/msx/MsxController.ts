import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msx")
export default class MsxController {
  @operation({
    summary: "Get Msx",
  })
  @get()
  static getMsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msx",
  })
  @post("{id}")
  static createMsx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
