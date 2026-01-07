import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myd")
export default class MydController {
  @operation({
    summary: "Get Myd",
  })
  @get()
  static getMyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myd",
  })
  @post("{id}")
  static createMyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
