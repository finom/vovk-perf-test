import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dm")
export default class DmController {
  @operation({
    summary: "Get Dm",
  })
  @get()
  static getDm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dm",
  })
  @post("{id}")
  static createDm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
