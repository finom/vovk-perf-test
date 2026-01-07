import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dum")
export default class DumController {
  @operation({
    summary: "Get Dum",
  })
  @get()
  static getDum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dum",
  })
  @post("{id}")
  static createDum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
