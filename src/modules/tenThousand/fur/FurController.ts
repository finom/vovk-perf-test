import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fur")
export default class FurController {
  @operation({
    summary: "Get Fur",
  })
  @get()
  static getFur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fur",
  })
  @post("{id}")
  static createFur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
