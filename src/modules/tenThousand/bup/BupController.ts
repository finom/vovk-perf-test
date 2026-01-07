import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bup")
export default class BupController {
  @operation({
    summary: "Get Bup",
  })
  @get()
  static getBup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bup",
  })
  @post("{id}")
  static createBup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
