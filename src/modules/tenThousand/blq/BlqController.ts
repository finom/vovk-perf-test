import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blq")
export default class BlqController {
  @operation({
    summary: "Get Blq",
  })
  @get()
  static getBlq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blq",
  })
  @post("{id}")
  static createBlq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
