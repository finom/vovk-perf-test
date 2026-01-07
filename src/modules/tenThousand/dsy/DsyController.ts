import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsy")
export default class DsyController {
  @operation({
    summary: "Get Dsy",
  })
  @get()
  static getDsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsy",
  })
  @post("{id}")
  static createDsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
