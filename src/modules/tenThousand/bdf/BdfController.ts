import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdf")
export default class BdfController {
  @operation({
    summary: "Get Bdf",
  })
  @get()
  static getBdf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdf",
  })
  @post("{id}")
  static createBdf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
