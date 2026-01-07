import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkq")
export default class DkqController {
  @operation({
    summary: "Get Dkq",
  })
  @get()
  static getDkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkq",
  })
  @post("{id}")
  static createDkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
