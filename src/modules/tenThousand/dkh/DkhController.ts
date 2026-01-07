import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkh")
export default class DkhController {
  @operation({
    summary: "Get Dkh",
  })
  @get()
  static getDkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkh",
  })
  @post("{id}")
  static createDkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
