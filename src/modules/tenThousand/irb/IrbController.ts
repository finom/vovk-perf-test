import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irb")
export default class IrbController {
  @operation({
    summary: "Get Irb",
  })
  @get()
  static getIrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irb",
  })
  @post("{id}")
  static createIrb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
