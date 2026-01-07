import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blh")
export default class BlhController {
  @operation({
    summary: "Get Blh",
  })
  @get()
  static getBlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blh",
  })
  @post("{id}")
  static createBlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
