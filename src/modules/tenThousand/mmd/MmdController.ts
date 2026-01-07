import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmd")
export default class MmdController {
  @operation({
    summary: "Get Mmd",
  })
  @get()
  static getMmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmd",
  })
  @post("{id}")
  static createMmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
