import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfw")
export default class DfwController {
  @operation({
    summary: "Get Dfw",
  })
  @get()
  static getDfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfw",
  })
  @post("{id}")
  static createDfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
