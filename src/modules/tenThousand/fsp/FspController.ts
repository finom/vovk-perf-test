import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsp")
export default class FspController {
  @operation({
    summary: "Get Fsp",
  })
  @get()
  static getFsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsp",
  })
  @post("{id}")
  static createFsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
