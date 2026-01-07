import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfi")
export default class MfiController {
  @operation({
    summary: "Get Mfi",
  })
  @get()
  static getMfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfi",
  })
  @post("{id}")
  static createMfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
