import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnk")
export default class NnkController {
  @operation({
    summary: "Get Nnk",
  })
  @get()
  static getNnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnk",
  })
  @post("{id}")
  static createNnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
