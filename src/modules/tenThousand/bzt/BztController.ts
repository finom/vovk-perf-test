import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzt")
export default class BztController {
  @operation({
    summary: "Get Bzt",
  })
  @get()
  static getBzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzt",
  })
  @post("{id}")
  static createBzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
