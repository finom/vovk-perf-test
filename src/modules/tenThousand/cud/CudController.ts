import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cud")
export default class CudController {
  @operation({
    summary: "Get Cud",
  })
  @get()
  static getCud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cud",
  })
  @post("{id}")
  static createCud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
