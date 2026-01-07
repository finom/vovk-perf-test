import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftk")
export default class FtkController {
  @operation({
    summary: "Get Ftk",
  })
  @get()
  static getFtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftk",
  })
  @post("{id}")
  static createFtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
