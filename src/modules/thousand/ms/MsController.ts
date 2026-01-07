import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ms")
export default class MsController {
  @operation({
    summary: "Get Ms",
  })
  @get()
  static getMs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ms",
  })
  @post("{id}")
  static createMs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
