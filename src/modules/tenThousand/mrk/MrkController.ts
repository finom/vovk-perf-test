import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrk")
export default class MrkController {
  @operation({
    summary: "Get Mrk",
  })
  @get()
  static getMrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrk",
  })
  @post("{id}")
  static createMrk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
