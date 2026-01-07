import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfe")
export default class DfeController {
  @operation({
    summary: "Get Dfe",
  })
  @get()
  static getDfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfe",
  })
  @post("{id}")
  static createDfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
