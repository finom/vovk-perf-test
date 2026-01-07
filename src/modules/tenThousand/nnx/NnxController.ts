import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnx")
export default class NnxController {
  @operation({
    summary: "Get Nnx",
  })
  @get()
  static getNnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnx",
  })
  @post("{id}")
  static createNnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
