import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbr")
export default class MbrController {
  @operation({
    summary: "Get Mbr",
  })
  @get()
  static getMbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbr",
  })
  @post("{id}")
  static createMbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
