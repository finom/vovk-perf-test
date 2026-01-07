import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzc")
export default class MzcController {
  @operation({
    summary: "Get Mzc",
  })
  @get()
  static getMzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzc",
  })
  @post("{id}")
  static createMzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
