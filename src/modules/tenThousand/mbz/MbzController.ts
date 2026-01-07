import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbz")
export default class MbzController {
  @operation({
    summary: "Get Mbz",
  })
  @get()
  static getMbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbz",
  })
  @post("{id}")
  static createMbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
