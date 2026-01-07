import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyh")
export default class EyhController {
  @operation({
    summary: "Get Eyh",
  })
  @get()
  static getEyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyh",
  })
  @post("{id}")
  static createEyh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
