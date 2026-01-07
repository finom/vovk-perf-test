import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtt")
export default class DttController {
  @operation({
    summary: "Get Dtt",
  })
  @get()
  static getDtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtt",
  })
  @post("{id}")
  static createDtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
