import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzx")
export default class MzxController {
  @operation({
    summary: "Get Mzx",
  })
  @get()
  static getMzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzx",
  })
  @post("{id}")
  static createMzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
