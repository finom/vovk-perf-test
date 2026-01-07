import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfe")
export default class MfeController {
  @operation({
    summary: "Get Mfe",
  })
  @get()
  static getMfe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfe",
  })
  @post("{id}")
  static createMfe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
