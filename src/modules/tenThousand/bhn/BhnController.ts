import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhn")
export default class BhnController {
  @operation({
    summary: "Get Bhn",
  })
  @get()
  static getBhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhn",
  })
  @post("{id}")
  static createBhn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
