import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btk")
export default class BtkController {
  @operation({
    summary: "Get Btk",
  })
  @get()
  static getBtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btk",
  })
  @post("{id}")
  static createBtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
