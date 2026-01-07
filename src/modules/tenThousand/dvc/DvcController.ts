import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvc")
export default class DvcController {
  @operation({
    summary: "Get Dvc",
  })
  @get()
  static getDvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvc",
  })
  @post("{id}")
  static createDvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
