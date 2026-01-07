import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dor")
export default class DorController {
  @operation({
    summary: "Get Dor",
  })
  @get()
  static getDor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dor",
  })
  @post("{id}")
  static createDor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
