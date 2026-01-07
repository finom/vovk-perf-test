import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hal")
export default class HalController {
  @operation({
    summary: "Get Hal",
  })
  @get()
  static getHal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hal",
  })
  @post("{id}")
  static createHal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
