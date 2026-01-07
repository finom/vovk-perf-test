import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtk")
export default class DtkController {
  @operation({
    summary: "Get Dtk",
  })
  @get()
  static getDtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dtk",
  })
  @post("{id}")
  static createDtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
