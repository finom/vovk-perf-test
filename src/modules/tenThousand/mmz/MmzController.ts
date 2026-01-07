import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmz")
export default class MmzController {
  @operation({
    summary: "Get Mmz",
  })
  @get()
  static getMmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmz",
  })
  @post("{id}")
  static createMmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
