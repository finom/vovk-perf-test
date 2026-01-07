import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eux")
export default class EuxController {
  @operation({
    summary: "Get Eux",
  })
  @get()
  static getEux = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eux",
  })
  @post("{id}")
  static createEux = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
