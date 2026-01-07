import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dny")
export default class DnyController {
  @operation({
    summary: "Get Dny",
  })
  @get()
  static getDny = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dny",
  })
  @post("{id}")
  static createDny = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
